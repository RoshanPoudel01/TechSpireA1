import { useParams, useSearchParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  return <div>Blog Id:{id?.slice(3)}</div>;
};

export default BlogDetail;
