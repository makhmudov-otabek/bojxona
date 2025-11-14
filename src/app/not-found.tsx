export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8  rounded shadow">
        <p className="text-4xl mb-4 text-gray-600">
          Kechirasiz — bu sahifa ishlab chiqarish jarayonida.
        </p>
        <a
          href="/home"
          className="inline-block px-4 py-2 bg-[#203663] text-white rounded"
        >
          Dashboardga qaytish
        </a>
      </div>
    </main>
  );
}
