import { IoBookmarksOutline } from "react-icons/io5";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtag,
  } = blog;
  return (
    <>
      <div className="mb-20  space-y-4">
        <img
          className="w-full mb-8"
          src={cover}
          alt={`Cover picture of ${title}`}
        />
        <div className="flex justify-between mb-4">
          <div className="flex">
            <img className="w-14" src={author_img} alt="" />
            <div className="ml-6">
              <h3 className="text-2xl">{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div>
            <span>{reading_time} min read</span>
            <button
              onClick={() => handleAddToBookmark(blog)}
              className="ml-2 text-white rounded-full p-3 text-lg bg-green-500"
            >
              <IoBookmarksOutline></IoBookmarksOutline>
            </button>
          </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
        <p>{hashtag}</p>
        <button
          onClick={() => handleMarkAsRead(id, reading_time)}
          className="text-purple-500 font-bold underline"
        >
          Mark As Read
        </button>
      </div>
    </>
  );
};

Blog.prototypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
