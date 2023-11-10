import axios from "axios";

import { ENDPOINT } from "../constants";
import { CommonContentPayload } from "../../models/common";
import { Blog } from "../../models/blog";

export const fetchBlogItem = (slug: string) =>
  axios.get<CommonContentPayload<Blog>>(`${ENDPOINT}/blog/slug/${slug}`);
