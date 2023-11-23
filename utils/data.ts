type PostType = {
  cat: string;
  slug?: string;
  title?: string;
};

export const postsList: PostType[] = [
  {
    cat: "Form",
  },
  {
    cat: "form",
    slug: "form-with-react-hook-form",
    title: "Form with React Hook Form",
  },
  {
    cat: "form",
    slug: "traditional-form",
    title: "Traditional form in React",
  },
  {
    cat: "API Calls",
  },
  {
    cat: "api-calls",
    slug: "fetch-api",
    title: "Get Data with Fetch",
  },
  {
    cat: "api-calls",
    slug: "axios",
    title: "Get Data with Axios",
  },
  {
    cat: "api-calls",
    slug: "swr",
    title: "Get Data with SWR",
  },
  {
    cat: "api-calls",
    slug: "react-query",
    title: "Get Data with React Query",
  },
  {
    cat: "Auth",
  },
  {
    cat: "auth",
    slug: "next-auth",
    title: "Authentication with NextAuth.js",
  },
];
