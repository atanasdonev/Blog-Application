package com.example.blog.repository;

import com.example.blog.entity.Post;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PostRepositoryTest {

    @Autowired
    PostRepository postRepository;

    @Test
    public void createPost(){
        Post post = Post.builder()
                .title("test title")
                .content("test content")
                .build();

        Post post2 = Post.builder()
                .title("test title 2")
                .content("test content 2")
                .build();

        postRepository.save(post2);
    }
}