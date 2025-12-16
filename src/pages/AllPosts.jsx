import service from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useState, useEffect } from "react";

export default function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts([]).then(posts => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    return (
        <div className="w-full py-8">
            <div className="flex flex-wrap">
                {posts.map(post => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </div>
    )
}