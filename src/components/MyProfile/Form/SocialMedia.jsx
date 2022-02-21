import React from "react";

const SocialMedia = () => {
  return (
    <div className="space-y-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900">Social Link</h1>
      </div>
      <form className="grid md:grid-cols-2 gap-10">
        <label className="flex flex-col space-y-3">
          <span>Skype</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Website URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Facebook URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Twitter URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Linkedin URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Instagram URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Google Plus URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Youtube URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Pinterest URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Vimeo URL</span>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
      </form>
      <div className="flex justify-end">
        <button className="text-white font-medium bg-red-700 rounded px-5 py-3">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
