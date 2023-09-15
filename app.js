const app = Vue.createApp({

    data() {
        return {
          title:"Harry potter",

            all_cards: [
              {
                img: "assets/img/cairo.png",
                name: "القاهرة",
                price : "3 أيام بتكلفة 1,250 دولار",

              },
              {
                img: "assets/img/dubai.png",
                name: "دبي",
                price : "3 أيام بتكلفة 2,500 دولار",

              },
              {
                img: "assets/img/istanbul.png",
                name: "اسطنبول",
                price : "5 أيام بتكلفة 1,500 دولار",

              },
              {
                img: "assets/img/reyad.png",
                name: "الرياض",
                price : "2 أيام بتكلفة 1,500 دولار",

              },
            ],

            active_cards:[
              {
                img: "assets/img/cairo.png",
                name: "القاهرة",
                price : "3 أيام بتكلفة 1,250 دولار",

              },
              {
                img: "assets/img/dubai.png",
                name: "دبي",
                price : "3 أيام بتكلفة 2,500 دولار",

              },
              {
                img: "assets/img/istanbul.png",
                name: "اسطنبول",
                price : "5 أيام بتكلفة 1,500 دولار",

              },

            ],
            start:0,


            // again for comments
            all_comments: [
              {
                img: "assets/img/client1.png",
                name: "أسامة الأبيض",
                comment : "يمكنني القول إنني قمت بقطاء أفضل رحلة عائلة على الإطلاق، كان الفنادق رائعة وخطة السفر ممتازة جداً ومريحة .",
                stars: 5,
              },
              {
                img: "assets/img/client2.png",
                name: "ماهر عبد اللطيف",
                comment : "تقدم شركة رحلاتي خدمات مناسبة جداً لرجال الأعمال، هذا ما ساعدني في رحلتي وجعلني اختصر جداً من مشاكل الحجوزات.",
                stars: 4,
              },
              {
                img: "assets/img/client3.png",
                name: "محمد الأحمد",
                comment : "كانت تجربة مميزة مع خدمات رائعة قضيت أفضل إجازة، أنصح بالتعامل مع شركة رحلاتي بدون تردد.",
                stars:2,
              },
              {
                img: "assets/img/client4.png",
                name: "حسن الحسين",
                comment : "يمكنني القول إنني قمت بقطاء أفضل رحلة عائلة على الإطلاق، كان الفنادق رائعة وخطة السفر ممتازة جداً ومريحة .",
                stars: 5,
              },
            ],

            active_comments:[
              {
                img: "assets/img/client1.png",
                name: "أسامة الأبيض",
                comment : "يمكنني القول إنني قمت بقطاء أفضل رحلة عائلة على الإطلاق، كان الفنادق رائعة وخطة السفر ممتازة جداً ومريحة .",
                stars: 5,
              },
              {
                img: "assets/img/client2.png",
                name: "ماهر عبد اللطيف",
                comment : "تقدم شركة رحلاتي خدمات مناسبة جداً لرجال الأعمال، هذا ما ساعدني في رحلتي وجعلني اختصر جداً من مشاكل الحجوزات.",
                stars: 4,
              },
              {
                img: "assets/img/client3.png",
                name: "محمد الأحمد",
                comment : "كانت تجربة مميزة مع خدمات رائعة قضيت أفضل إجازة ، أنصح بالتعامل مع شركة رحلاتي بدون تردد.",
                stars:2,
              },

            ],
            start_comments:0,

        }

        
    },

    
    methods: {
      prev(){
        if(this.start == 0){
          return
        }

        this.start -=1;

        start = this.start;


          this.active_cards[0].name = this.all_cards[start].name;
          this.active_cards[0].price = this.all_cards[start].price;
          this.active_cards[0].img = this.all_cards[start].img;

          this.active_cards[1].name = this.all_cards[start+1].name;
          this.active_cards[1].price = this.all_cards[start+1].price;
          this.active_cards[1].img = this.all_cards[start+1].img;


          this.active_cards[2].name = this.all_cards[start+2].name;
          this.active_cards[2].price = this.all_cards[start+2].price;
          this.active_cards[2].img = this.all_cards[start+2].img;



      },

        next(){
          if(this.start+2 == this.all_cards.length-1){
            return
          }

          this.start +=1;

          start = this.start;


            this.active_cards[0].name = this.all_cards[start].name;
            this.active_cards[0].price = this.all_cards[start].price;
            this.active_cards[0].img = this.all_cards[start].img;

            this.active_cards[1].name = this.all_cards[start+1].name;
            this.active_cards[1].price = this.all_cards[start+1].price;
            this.active_cards[1].img = this.all_cards[start+1].img;


            this.active_cards[2].name = this.all_cards[start+2].name;
            this.active_cards[2].price = this.all_cards[start+2].price;
            this.active_cards[2].img = this.all_cards[start+2].img;



        },


        prev_comment(){
          if(this.start_comments == 0){
            return
          }
  
          this.start_comments -=1;
  
          start = this.start_comments;
  
  
          this.active_comments[0].name = this.all_comments[start].name;
          this.active_comments[0].comment = this.all_comments[start].comment;
          this.active_comments[0].img = this.all_comments[start].img;
          this.active_comments[0].stars = this.all_comments[start].stars;

          this.active_comments[1].name = this.all_comments[start+1].name;
          this.active_comments[1].comment = this.all_comments[start+1].comment;
          this.active_comments[1].img = this.all_comments[start+1].img;
          this.active_comments[1].stars = this.all_comments[start+1].stars;  

          this.active_comments[2].name = this.all_comments[start+2].name;
          this.active_comments[2].comment = this.all_comments[start+2].comment;
          this.active_comments[2].img = this.all_comments[start+2].img;
          this.active_comments[2].stars = this.all_comments[start+2].stars;    
  
  
        },
  
          next_comment(){
            if(this.start_comments+2 == this.all_comments.length-1){
              return
            }

          
  
            this.start_comments +=1;
  
            start = this.start_comments;
  
  
            this.active_comments[0].name = this.all_comments[start].name;
            this.active_comments[0].comment = this.all_comments[start].comment;
            this.active_comments[0].img = this.all_comments[start].img;
            this.active_comments[0].stars = this.all_comments[start].stars;
  
            this.active_comments[1].name = this.all_comments[start+1].name;
            this.active_comments[1].comment = this.all_comments[start+1].comment;
            this.active_comments[1].img = this.all_comments[start+1].img;
            this.active_comments[1].stars = this.all_comments[start+1].stars;  
  
            this.active_comments[2].name = this.all_comments[start+2].name;
            this.active_comments[2].comment = this.all_comments[start+2].comment;
            this.active_comments[2].img = this.all_comments[start+2].img;
            this.active_comments[2].stars = this.all_comments[start+2].stars;      
  
          }


    },


  
    
    
    });
    
    
    app.mount("#app");