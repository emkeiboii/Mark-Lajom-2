const Contact = () => {
  return (
    <div
      id="contact"
      className=" px-5 md:flex items-center justify-center gap-10"
    >
      <div className="">
        <form className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl w-80">Contact Form</h1>
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            className="flex-1 w-full p-4 text-navy border rounded-lg sm:text-md focus:ring-navy focus:border-navy dark:bg-gray-700 "
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="flex-1 w-full p-4 text-navy border rounded-lg sm:text-md focus:ring-navy focus:border-navy dark:bg-gray-700 "
            required
          />
          <textarea
            name="Message"
            placeholder="Message"
            className="flex-1 w-full p-4 text-navy border rounded-lg sm:text-md focus:ring-navy focus:border-navy dark:bg-gray-700 "
            required
          ></textarea>
          <button
            type="submit"
            className="align-self outline outline-1 rounded text-lavender py-2 my-4 px-5 hover:bg-lavender hover:bg-opacity-20 duration-200 w-32 ease-out"
          >
            Send
          </button>
        </form>
      </div>
      <hr className="w-0.5 lg:h-72 bg-white hidden sm:hidden lg:block ease-in-out duration-700" />
      <div>
        <h1 className="font-bold text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-white py-5 hover:text-blue duration-500 ease-in-out ">
          LETS <br />
          CREATE <br />
          TOGETHER!
        </h1>
      </div>
    </div>
  );
};

export default Contact;
