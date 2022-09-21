const Posts=[

    { title: 'post one', body: 'This is post one' },
 
    { title: 'post two', body: 'This is post two' }
 
  ]
 
 
 
   function getPosts(){
 
    setTimeout(() => {
 
      let output = '';
 
      Posts.forEach((post, index)=>{
 
        output += `<li>${post.title}</li>`;
 
      });
 
      document.body.innerHTML=output;
 
    },1000);
 
   }

   function deletePost(){
    setTimeout(() => {
 
        let output = '';
   
        Posts.forEach((post, index)=>{
   
          output -= `<li>${post.title}</li>`;
   
        });
   
        document.body.innerHTML=output;
   
      },1000);


   }
 
 
 
   function createPost(post){
    return new Promise((resolve, reject)=>{
 
    setTimeout(()=>{
 
      Posts.push(post);
 
      const error =true;

      if(!error){
        resolve();
      }else {
        reject('Error: something went wrong')
      }
 
    }, 2000);

});
 
}
   createPost({ title: 'post three', body: 'This is post three' }, getPosts);
 
   createPost({ title: 'post three', body: 'This is post three' }, getPosts);

const Posts=[
       { title: 'post one', body: 'This is post one',createdAt: new Date().getTime() },
     
       { title: 'post two', body: 'This is post two',createdAt: new Date().getTime() }
     
     ]
   
      function getPosts(){
       setTimeout(() => {
           let output = '';
           Posts.forEach((post, index)=>{
               output += `<li>${post.title}</li>`;
           });
     
       document.body.innerHTML=output;
     
       },1000);
     
      }
   
      function createPost(post){
       return new Promise((resolve, reject)=>{
           setTimeout(()=>{
               Posts.push({...post, createdAt: new Date().getTime()});
               const error =false;
               if(!error){
                   resolve();
               }else {
                   reject('Error: something went wrong')
               }
           }, 2000);
       }); 
   }
   
   function deletePost(){
       return new Promise((resolve, reject)=>{
           setTimeout(()=>{
               if(posts.length > 0){
                   const lastelement = posts.pop()
                   resolve(lastelement);
               } else {
                   reject('Array is empty now');
               }
           }, 1000);
       });
   }
     
     
     
   createPost({ title: 'Post Three', body: 'This is post three' })
   .then(() => {
       getPosts()
       deletePost().then((deletedElement)=> {
           console.log(deletedElement)
           getPosts();
           deletePost().then(()=> {
               getPosts();
               deletePost().then(()=>{
                   getPosts()
                   deletePost().then(()=> {})
                   .catch((err)=>{
                       console.log('Inside catch block',err)
                   })
               }).catch((err) => {})
           }).catch((err) => {})
       })
   })
   .catch(err => console.log(err))
   


const Posts=[
    { title: 'post one', body: 'This is post one',createdAt: new Date().getTime() },
  
    { title: 'post two', body: 'This is post two',createdAt: new Date().getTime() }
  
  ]

   function getPosts(){
    setTimeout(() => {
        let output = '';
        Posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
  
    document.body.innerHTML=output;
  
    },1000);
  
   }

   function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Posts.push({...post, createdAt: new Date().getTime()});
            const error =false;
            if(!error){
                resolve();
            }else {
                reject('Error: something went wrong')
            }
        }, 2000);
    }); 
}

function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(Posts.length > 0){
                const lastelement = posts.pop()
                resolve(lastelement);
            } else {
                reject('Array is empty now');
            }
        }, 1000);
    });
}
  
  
  
createPost({ title: 'Post Three', body: 'This is post three' })
.then(() => {
    getPosts()
    deletePost().then((deletedElement)=> {
        console.log(deletedElement)
        getPosts();
        deletePost().then(()=> {
            getPosts();
            deletePost().then(()=>{
                getPosts()
                deletePost().then(()=> {})
                .catch((err)=>{
                    console.log('Inside catch block',err)
                })
            }).catch((err) => {})
        }).catch((err) => {})
    })
})
.catch(err => console.log(err))
createPost({ title: 'Post four', body: 'This is post four' })