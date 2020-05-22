export const sortBlogPosts = (data) => {
  // Newest first
  data.sort((a, b) => {
    let fa = a.created_at;
    let fb = b.created_at;

    if(fa < fb) {
      return 1
    } else {
      return -1;
    } 
  });
  return data;
}