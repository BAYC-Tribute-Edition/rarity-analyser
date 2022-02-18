const config = {
    app_name: 'Cool Rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: '_metadata.json',
    collection_contract_address: '0x19eB8A3eCD7e7e377E07de339C03c61931CFE543',
    collection_name: 'Bored Ape Yacht Club TRIBUTE EDITION',
    collection_description: 'BAYC Tribute Edition is a collection of 10,008 Tribute Bored Ape NFTs—unique digital collectibles living on the Polygon blockchain. They all have unique properties. NOT A COPY PASTE EVERYTHING IS HAND DRAWN, FROM SCRATCH',
    collection_id_from: 0,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.bayct.db',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://imgur.com/a/OZq1Bky',
    item_path_name: 'bayct',
    page_item_num: 50,
    content_image_is_video: false,
    content_image_frame: 'rectangle', // circle, rectangle
    use_wallet: false
};

module.exports = config;