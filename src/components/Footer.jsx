const Footer = () => {
  return (
    <footer className="py-2 font-semibold text-sm text-gray-400">
      <div className="w-full flex flex-col items-center justify-center px-2 md:justify-between md:flex-row">
        <div className="max-md:mb-2">
          <p>© 2023, React-Tailwind Dashboard</p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
