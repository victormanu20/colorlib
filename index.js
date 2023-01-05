containerCard = document.getElementById('container__cards')

listaPlaces = [
    {
        name: "place perfect For nature Lovers",
        image : 'https://images.adsttc.com/media/images/54ef/bd2e/e58e/ce89/2500/00d9/large_jpg/PORTADA_cassa_04.jpg?1424997664',
        position :"London, England",
        bed : 3,
        bath : 2
    },
    {
        name: "place perfect For nature Lovers",
        image : 'https://images.adsttc.com/media/images/54ef/bd2e/e58e/ce89/2500/00d9/large_jpg/PORTADA_cassa_04.jpg?1424997664',
        position :"London, England",
        bed : 3,
        bath : 2
    },
    {
        name: "place perfect For nature Lovers",
        image: 'https://images.adsttc.com/media/images/54ef/bd2e/e58e/ce89/2500/00d9/large_jpg/PORTADA_cassa_04.jpg?1424997664',
        position :"London, England",
        bed : 3,
        bath : 2
    },
    {
        name: "place perfect For nature Lovers",
        image: 'https://images.adsttc.com/media/images/54ef/bd2e/e58e/ce89/2500/00d9/large_jpg/PORTADA_cassa_04.jpg?1424997664',
        position :"London, England",
        bed : 3,
        bath : 2
    },
    {
        name: "place perfect For nature Lovers",
        image: 'https://images.adsttc.com/media/images/54ef/bd2e/e58e/ce89/2500/00d9/large_jpg/PORTADA_cassa_04.jpg?1424997664',
        position :"London, England",
        bed : 3,
        bath : 2
    },
    {
        name: "place perfect For nature Lovers",
        image: 'https://images.adsttc.com/media/images/54ef/bd2e/e58e/ce89/2500/00d9/large_jpg/PORTADA_cassa_04.jpg?1424997664',
        position :"London, England",
        bed : 3,
        bath : 2
    },{
        name: "place perfect For nature Lovers",
        image: 'https://images.adsttc.com/media/images/54ef/bd2e/e58e/ce89/2500/00d9/large_jpg/PORTADA_cassa_04.jpg?1424997664',
        position :"London, England",
        bed : 3,
        bath : 2
    }
]

listaPlaces.map((element) =>{
    container = document.createElement('div')
    image = document.createElement('img')
    title = document.createElement('h2')
    position = document.createElement('p')
    span = document.createElement('span')

    title.textContent = element.name
    image.src = element.image
    position.textContent = element.position
    caract = `${element.bed} BED & ${element.bath} BATH`
    span.textContent = caract
    container.append(image,title, position,caract)
    containerCard.append(container)
})
