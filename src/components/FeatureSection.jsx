import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function FeatureSection() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedOutput, setCopiedOutput] = useState(false);

  const pythonCode = `# Meminta input dari pengguna
nama = input("Masukkan nama mahasiswa: ")
nim = input("Masukkan NIM: ")
nilai = int(input("Masukkan nilai ujian (0-100): "))

# Menampilkan tipe data
print(f"\nNama: {nama} (type: {type(nama)})")
print(f"NIM: {nim} (type: {type(nim)})")
print(f"Nilai: {nilai} (type: {type(nilai)})")

# Menentukan kategori nilai
if 85 <= nilai <= 100:
    kategori = "A (Sangat Baik)"
elif 75 <= nilai <= 84:
    kategori = "B (Baik)"
elif 60 <= nilai <= 74:
    kategori = "C (Cukup)"
elif 40 <= nilai <= 59:
    kategori = "D (Kurang)"
elif 0 <= nilai < 40:
    kategori = "E (Sangat Kurang)"
else:
    kategori = "Nilai tidak valid"

# Menampilkan hasil evaluasi
print("\nHasil Evaluasi:")
print(f"Mahasiswa: {nama} (NIM: {nim})")
print(f"Nilai Ujian: {nilai}")
print(f"Kategori Nilai: {kategori}")`;

  const programOutput = `Nama: Candra Aditya (type: <class 'str'>)
NIM: 152022130 (type: <class 'str'>)
Nilai: 87 (type: <class 'int'>)

Hasil Evaluasi:
Mahasiswa: Candra Aditya (NIM: 152022130)
Nilai Ujian: 87
Kategori Nilai: A (Sangat Baik)`;

  return (
    <section id="feature-engineering" className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Introduction to Python and Data Science Case Study Assignment</h2>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow space-y-10">
          {/* Deskripsi awal proyek */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Student Grade Evaluation Program with Python
            </h3>
            <p className="mb-3">
              A simple Python-based program that accepts user input in the form of student name, student ID number, and exam score (0–100). The program will:
            </p>
            <ul className="list-disc ml-6 text-sm mt-6 mb-4 space-y-1 text-left">
              <li>Display the data type of input.</li>
              <li>Categories text scores into grade letters (A-E) with descriptions using if-elif-else logic.</li>
              <li>Displays complete evaluation results with student information.</li>
            </ul>

            {/* Kode program Python */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg text-green-700 dark:text-green-400 mb-2">Python Code</h4>
              <div className="relative">
                <CopyToClipboard text={pythonCode} onCopy={() => setCopiedCode(true)}>
                  <button className="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700">
                    {copiedCode ? 'Copied!' : 'Copy'}
                  </button>
                </CopyToClipboard>
                <pre className="bg-gray-900 text-green-100 text-xs md:text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap text-left">
                  {pythonCode}
                </pre>
              </div>
            </div>

            {/* Output dari program */}
            <div className="mt-4">
              <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-400 mb-2">Program Output</h4>
              <div className="relative">
                <CopyToClipboard text={programOutput} onCopy={() => setCopiedOutput(true)}>
                  <button className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded hover:bg-purple-700">
                    {copiedOutput ? 'Copied!' : 'Copy'}
                  </button>
                </CopyToClipboard>
                <pre className="bg-gray-800 text-purple-100 text-xs md:text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap text-left">
                  {programOutput}
                </pre>
              </div>
            </div>

            {/* Hasil */ }
            <div className="mt-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Results :</h4>
              <ul className="list-disc ml-6 text-sm space-y-2 text-left">
                <li>
                  <strong>Data Type Validation :</strong> Indicates that the input has been received and recognized corrently by the program.
                </li>
                <li>
                  <strong>Value Evaluation :</strong> Confirms that the value of 87 is in the A (Good) category because it is in rage of 85 - 100.
                </li>
                <li>
                  <strong>Complete Reporting :</strong> Displays student identity and evaluation results comprehensively.x
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

