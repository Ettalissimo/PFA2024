import { PathologieRepresentation } from "./pathologie-representation";
import { UserRepresentation } from "./user-representation";

export interface BlogRepresentation{
    idBlog?: String,
    pathologie?: PathologieRepresentation, 
    tags?: String[],
    upvotes? : number,
    downvotes?: number,
    postTime?:Date,
    user?: UserRepresentation  

}