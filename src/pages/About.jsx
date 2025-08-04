const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 lg:px-32 py-12 max-w-5xl overflow-x-hidden">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        Welcome to{" "}
        <span className="font-semibold text-purple-600">Online Tech Store</span>
        , your one-stop shop for the latest gadgets, gizmos and tech! This site
        is a dummy demo created to showcase frontend design and functionality.
        While the products look amazing, none of them are actually for sale
        (sorry!).
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
      <p className="text-base text-gray-600 mb-6 leading-relaxed">
        Our goal is to simulate the look and feel of a modern e-commerce
        experience. We use realistic product cards, a smooth shopping cart
        interface, responsive design, and a clean layout to provide inspiration
        and practice for developers.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Technologies Used
      </h2>
      <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
        <li>React with React Router</li>
        <li>Tailwind CSS for styling</li>
        <li>Context API for state management</li>
        <li>React Hot Toast for notifications</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Disclaimer</h2>
      <p className="text-base text-gray-600 leading-relaxed">
        This is not a real store. No purchases can be made, no accounts are
        stored, and no messages are sent. It's all built for demonstration,
        learning, and fun purposes only.
      </p>
    </div>
  );
};

export default About;
