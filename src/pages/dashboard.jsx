export default function Dashboard() {
  return (
    // p- = padding on all sides
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-6">
        {/* grid makes div a parent container */}
        {/* grid-cols-... define 3 equal width columns */}
        {/* gap-6 adds spacing between rows and columns */}
        <div className="bg-white p-4 rounded shadow">Card 1</div>
        <div className="bg-white p-4 rounded shadow">Card 2</div>
        <div className="bg-white p-4 rounded shadow">Card 3</div>
        <div className="bg-white p-4 rounded shadow">Card 4</div>
      </div>
    </div>
  );
}
