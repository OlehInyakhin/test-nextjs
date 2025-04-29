export default function Features() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Features</h1>
      <p className="text-lg mb-8">
        This is a dummy features page. The contact page has been fully implemented according to the
        design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map(item => (
          <div key={`feature-${item}`} className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{`Feature ${item}`}</h3>
            <p>{`Description of feature ${item} goes here.`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
