export default function Features() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Features</h1>
      <p className="text-lg mb-8">
        This is a dummy features page. The contact page has been fully implemented according to the design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
          <p>Description of feature 1 goes here.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
          <p>Description of feature 2 goes here.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
          <p>Description of feature 3 goes here.</p>
        </div>
      </div>
    </div>
  )
}

