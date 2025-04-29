export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-lg mb-8">
        This is a dummy blog page. The contact page has been fully implemented according to the
        design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div key={`blog-post-${item}`} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-48" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{`Blog Post Title ${item}`}</h2>
              <p className="text-gray-600 mb-4">{`January ${item}, 2023`}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
