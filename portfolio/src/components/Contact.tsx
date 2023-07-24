const Contact = () => {
  return (
    <div
      id="contact"
      className="py-48 px-4 sm:px-0 md:px-0 lg:px-36 flex items-center justify-center gap-10"
    >
      <div className="">
        <form className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl">Contact Form</h1>
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            className="flex-1 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="flex-1 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <textarea
            name="Message"
            placeholder="Message"
            className="flex-1 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="align-self outline outline-1 rounded text-lavender py-2 px-5 hover:bg-lavender hover:bg-opacity-20 duration-200 w-32 ease-out"
          >
            Send
          </button>
        </form>
      </div>
      <hr className="w-1 h-20 bg-white" />
      <div>
        <h1>LETS CREATE TOGETHER</h1>
      </div>
    </div>
  );
};

export default Contact;
