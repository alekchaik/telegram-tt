HI! 
I joined the contest on accident, when explaining what my approach would be to changing the existing parser (I ended up making a large chunk of it, so figured why not)

The approach is to rewrite the parser from html to plain JS, and to map out different entities to symbols, allowing to expand the editor possibilities with little effort. 
The parser makes a map of entity points similar to entities array
I do want to call out that the AST tree is not essential & `{text:'', entites:[]}` can be retrieved in `getAstTreeHelper` , but I made it a tree for the reqs.
The main thing I like about the approach is its scalability, pretty much any MD\Html tag can be added & mapped to an entity
The main thing I don't like is having to check per character whether a text slice matches an entity (I did optimize what I could)

P.S.
Since I was not aware of another TG channel explaining the task in detail (about refactoring Composer & other stuff), I went with the approach causing the least amount of friction
The main reason I did that is I thought it was expected, but also having no context on database & test cases it's the only way I'd be certain nothing would break :)

P.P.S.
It was a pleasure to join the contest, even tho it appears my appproach is not desired, it was fun!
