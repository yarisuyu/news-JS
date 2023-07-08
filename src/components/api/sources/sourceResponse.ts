import ApiResponse from "../apiResponse";
import Source from "./source";

interface SourceResponse extends ApiResponse {
  // The results of the request.
  sources: Array<Source>;
};

export default SourceResponse;