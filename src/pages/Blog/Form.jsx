import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
const BlogForm = () => {
  const defaultValues = {
    title: "",
    description: "",
    image: "",
  };
  const schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    image: yup
      .mixed()
      .test("Image Required", "Image is Required ", (value) => value),
  });
  const [imagePreview, setImagePreview] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const submitData = (data) => {
    console.log({
      title: data.title,
      description: data.description,
      image: data.image[0] ? URL.createObjectURL(data.image[0]) : null,
    });
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-6 max-w-lg flex items-center min-h-[80dvh] ">
        <form
          onSubmit={handleSubmit(submitData)}
          className="space-y-6 border-solid border-2 p-10 rounded-md"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              {...register("title")}
              placeholder="Enter title"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <span className="text-red-500">
              {errors.title && errors.title.message}
            </span>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              {...register("description")}
              placeholder="Enter description"
              rows="4"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
            <span className="text-red-500">
              {errors.description && errors.description.message}
            </span>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              {...register("image")}
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  const preview = URL.createObjectURL(file);
                  setImagePreview(preview);
                }
              }}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 focus:ring-indigo-500 focus:border-indigo-500"
              accept="image/*"
            />
            <img src={imagePreview} />
            <span className="text-red-500">
              {errors.image && errors.image.message}
            </span>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default BlogForm;
