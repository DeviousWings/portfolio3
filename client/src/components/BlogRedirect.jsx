import { useEffect } from "react";

function BlogRedirect() {
  useEffect(() => {
    // Redirect to Substack
    window.location.href = "https://substack.com/@natdeviouswings";
  }, []);

  return (
    <div>
      <p>Redirecting to the blog...</p>
    </div>
  );
}

export default BlogRedirect;
