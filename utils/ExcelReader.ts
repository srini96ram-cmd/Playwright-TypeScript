import * as XLSX from 'xlsx';
import fs from 'node:fs';

export class ExcelReader {

  static readData(
    filePath: string,
    sheetName: string,
    rowIndex: number = 0
  ) {

    // Read Excel file as buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Parse Excel workbook
    const workbook = XLSX.read(fileBuffer, {
      type: 'buffer'
    });

    // Get Excel sheet
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
      throw new Error(`Sheet not found: ${sheetName}`);
    }

    // Convert Excel rows into JSON
    const rows = XLSX.utils.sheet_to_json(
      sheet,
      {
        defval: '',
        raw: false
      }
    );

    if (!rows[rowIndex]) {
      throw new Error(
        `Row ${rowIndex} not found in ${sheetName}`
      );
    }

    return Object.fromEntries(
      Object.entries(rows[rowIndex]).map(
        ([key, value]) => [key, String(value)]
      )
    );
  }
}