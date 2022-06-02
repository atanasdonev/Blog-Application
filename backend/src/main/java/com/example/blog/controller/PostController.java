package com.example.blog.controller;

import com.example.blog.entity.Post;
import com.example.blog.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }

    @PostMapping("/posts")
    public Post savePost(@RequestBody Post post){
       return postRepository.save(post);
    }

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable Long id){
        return postRepository.findById(id).get();
    }

    @PutMapping("/posts")
    public Post updatePost(@RequestBody Post post){
        return postRepository.save(post);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable Long id){
        postRepository.deleteById(id);
    }

}
