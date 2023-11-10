// d90c465164584bebbe37cdb220e66e00

console.log("hello")

const xhr=new XMLHttpRequest();

xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=d90c465164584bebbe37cdb220e66e00',true)


xhr.onload=function(){
    if (this.status==200) {
        let data =this.response
        data=JSON.parse(data)
        news=data.articles
        console.log(news)

        let container=document.querySelector('#accordionExample')
        let html=``;
        news.forEach((element,index) => {
            html+=` <div class="card">
                        <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${element.title}
                            </button>
                        </h2>
                        </div>
                    
                        <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#accordionExample">
                        <div class="card-body">
                        ${element.content}.   <a href="${element.url}">Read more at</a>
                        </div>
                        </div>
                    </div>`
        });
        container.innerHTML=html;
    }
    else{
        console.log('some error occured')
    }
}

xhr.send();