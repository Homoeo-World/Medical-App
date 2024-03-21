import Medicine from '../models/Medicine.js';

//add all medicines  
export const addAllMedicines = async (req, res) => {
    console.log('addAllMedicines...')
    data.forEach(async item => {
        try{
            const medicine = new Medicine({
                title: item.title,
                company: "Schwabe",
                category: item.Category,
                tags: item.Tags,
                subcategories: item.subcategories
            });
            await medicine.save()
            console.log(`Added ${item.title} to the database`);
        } catch (err) {
            console.error(`Error saving ${item.title}: ${err}`);
        }
    });

}

export const getMedicineNames = async(req, res) => {
    console.log('inside getMedicineNames...')
    console.log(req.query.category)
    try{
        const response = await Medicine.find({category: req.query.category }).select('title')
        // console.log('response', response)
        res.json(response)
    }
    catch(error){
        console.error('Error fetching medicine names:', error);
        res.status(500).json({ error: 'Internal Server Error' }); 
    } 
}

export const getDetailsByTitleandCompany = async(req, res) => {
    console.log('inside getMedicineDetailsByTitle...')
    console.log('request', req.query)
    try{
        const response = await Medicine.find({title: req.query.title, company: 'Schwabe'})
        console.log(response[0])
        res.json(response[0])
    }
    catch(error){
        console.error('Error fetching medicine names:', error)
        res.status(500).json({error: 'Internal Server Error'})
    }
}

// get products based on search-query | search-term
export const searchAutocompleteMedicines = async (req, res) => {
    console.log('inside searchAutocompleteMedicines...')
    console.log(req.body.searchTerm);
    try {
        
        const searchResults = await Medicine.aggregate([
            {
                '$search': {
                    index: 'default',
                    "autocomplete": {
                      query: req.query.searchTerm, //o, om, ome
                      path: 'title',
                    //   fuzzy:{
                    //       maxEdits:2, //spelling mistake
                    //       maxExpansions: 1
                    //   }
                    },
                }
            },
            { 
                "$project": {
                  "title": 1,
                  "_id":0
                }
            },
            {
                "$limit": 9
            }
            ]);
            console.log(searchResults)
        //send result of search query from mongodb
        res.status(200).json(searchResults);
    }
    catch(error){
        console.log('error')
        res.status(500).json({ message: error.message });
    }
}


// const data = [
//     {
//         "title": "Calcarea Fluorica 6x",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Piles, ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Calcarea phosphorica 6x",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Fracture, dentition, suppliment for children, useful during pregnancy, puberty, old age",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Calcarea Sulphurica 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Acne, Skin, boils, eczema, fibroids etc",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Ferrum Phosphoricum 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Anaemia, feverish condition, cattrahal condition of respiratory tract etc.",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Five Phos 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Weakness and prostration ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             },
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 185,
//                 "Discounted Percentage": 5
//             }
//         ]
//     },
//     {
//         "title": "Silicea 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Acne, Piles, Skin, bones ,etc.",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Ammi Visnaga MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Skin - Leucoderma / Vitiligo",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 220
//             }
//         ]
//     },
//     {
//         "title": "Agnus Castus MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Sexual Wellness",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 125
//             }
//         ]
//     },
//     {
//         "title": "Apocynum Cannabinum MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Urinary, Dropsy  etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 265
//             }
//         ]
//     },
//     {
//         "title": "Aesculus Hippocastanum MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Piles, Back, spondylitis etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Allium cepa MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": " coryza, Allergic rhinitis, etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Azadirachta Indica MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Skin, etc",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Alfalfa MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "General tonic, weakness, fatigue, loss of appetite etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Apis mellifica MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Skin, kidney, cyst, dropsy / swelling etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 220
//             }
//         ]
//     },
//     {
//         "title": "Arnica Montana MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Hair, injury, bone etc",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 240
//             }
//         ]
//     },
//     {
//         "title": "Ambroma Augusta MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "To control blood sugar",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Avena Sativa MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "General tonic, loss of appetite etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Allium Sativum MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Cholesterol, blood pressure etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Berberis Vulgaris MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Stone in kidney, bladder, gall bladder stone etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Boerhaavia Diffusa MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Berberis Aquifolium MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Acne, Skin",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 240
//             }
//         ]
//     },
//     {
//         "title": "Belladonna MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Headache, fever, pain, tonsils etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Bramhi (Bacopa Monnieri) MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "For weakness of Memory ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Baptisia Tinctoria MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Fever, Typhoid fever etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 280
//             }
//         ]
//     },
//     {
//         "title": "Bellis Perrinis",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Nerve injury , nerves etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 115
//             }
//         ]
//     },
//     {
//         "title": "Blatta orientalis MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Respiratory, Asthma etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Chionanthus Virginica MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 365
//             }
//         ]
//     },
//     {
//         "title": "Cantharis MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Urinary, Urinary tract infection, burning in urination, etc., hair fall, dandruff, ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 330
//             }
//         ]
//     },
//     {
//         "title": "Curcuma Longa MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Cephalandra Indica MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Diabetes etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Calendula Officinalis MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Skin wound healing, antiseptic etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Crataegus oxyacantha MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Cardiac Weakness, Heart tonic etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Chelidonium Majus MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Liver Diseases, Digestive Problem",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Ceanothus Americanus",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 315
//             }
//         ]
//     },
//     {
//         "title": "Cardus Marianus MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Liver Diseases",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Calotropis Gigantea MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Caprica Papaya MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Collinsonia Canadensis MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Piles",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 220
//             }
//         ]
//     },
//     {
//         "title": "Damiana MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Sexual Wellness",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Echinacea Angustifolia MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 220
//             }
//         ]
//     },
//     {
//         "title": "Embelica Officinalis MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Fucus vesiculosus MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Weight Managment",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 140
//             },
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Ginseng MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 365
//             }
//         ]
//     },
//     {
//         "title": "Ginkgo Biloba MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 220
//             }
//         ]
//     },
//     {
//         "title": "Guiacum MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 495
//             }
//         ]
//     },
//     {
//         "title": "Gymnema Sylvestre MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture, Diabetes ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Guatteria Gaumeri MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Cholesterol etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 330
//             }
//         ]
//     },
//     {
//         "title": "Gaultheria Procumbens MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 330
//             }
//         ]
//     },
//     {
//         "title": "Grindelia Robusta MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture, Asthma, respiratory etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 240
//             }
//         ]
//     },
//     {
//         "title": "Hydrangea Arborescens MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Urinary, Stone kidney, bladder etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Hydrastis Canadensis MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture cancer cachexia, Digestive system etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 425
//             }
//         ]
//     },
//     {
//         "title": "Justicia Adhatoda MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Cough, respiratory etc.",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Jaborandi MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Dandruff, Hair fall etc",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Janosia Ashoka MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Female, uterine tonic",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Natrum phosporicum 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Sour eructation, vomiting, heart burn, indigestion, acidity, nocturnal enuresis, etc.",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Natrum Sulphuricum 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Liver Diseases, Gastric biliousness, liver dysfunction, uric acid diathesis etc.",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Natrum Muriaticum 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Sun stroke, headache, eye strain, constipation, etc.",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Magnesium Phosporica 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Muscular cramps, pains, convulsions, flatulent colic etc.",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Kali Muriaticum ",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Sub acute catarrhal affection of middle ear, throat, glandular inflammation etc.",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Kali phosphoricum 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Weakness, exhaustion, mental & physical weakness, sleeplessness, melancholy, examination fear, back pain, etc.",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Kali Sulphuricum 6X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Dandruff, itchy skin, catarrh with yellowish discharge (bronchitis, pharyngitis, chronic suppuration, otitis media,seasonal rashesh",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "6x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Lycopodium MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Liver Diseases, Sexual Wellness, Digestive Problem, Kidney stone",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Muira Puama MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 410
//             }
//         ]
//     },
//     {
//         "title": "Myrica Cerifera MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Liver Diseases",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 365
//             }
//         ]
//     },
//     {
//         "title": "Ocimum Canum MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Ocimum Sanctum MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Phytolacca MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 125
//             }
//         ]
//     },
//     {
//         "title": "Plantago Major MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Toothache ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Pareira Brava MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Urinary, Kidney stone ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 220
//             }
//         ]
//     },
//     {
//         "title": "Phytolacca Berry MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Weight Managment",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 240
//             }
//         ]
//     },
//     {
//         "title": "Passiflora Incarnata MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Insomnia, Anxiety, stress ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 125
//             }
//         ]
//     },
//     {
//         "title": "Robinia Pseudocacia MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Digestive Problem, HyperAcidity ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 120
//             }
//         ]
//     },
//     {
//         "title": "Ruta Graveolens MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Bone, ligaments, eye strain, injury ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 130
//             }
//         ]
//     },
//     {
//         "title": "Rhus Toxicodendron MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Joint, bone, skin",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 315
//             }
//         ]
//     },
//     {
//         "title": "Ratanhia MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Piles",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Rauwolfia Serpentina MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Heart, blood pressure ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Syzygium Jambolanum MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Diabetes ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Symphytum Officinale MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Bone, fracture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 130
//             }
//         ]
//     },
//     {
//         "title": "Sarsaparilla MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Urinary, Kidney stone, bladder stone ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 220
//             }
//         ]
//     },
//     {
//         "title": "Sarsaparilla MY",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Urinary, Kidney stone, bladder stone ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 195
//             }
//         ]
//     },
//     {
//         "title": "Solidago Virgaurea MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 330
//             }
//         ]
//     },
//     {
//         "title": "Spongia Tosta MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Respiratory, cough ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 345
//             }
//         ]
//     },
//     {
//         "title": "Sabal Serrulata MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Prostate hypertrophy in male ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 280
//             }
//         ]
//     },
//     {
//         "title": "Thalaspi Bursa Pastoris MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 220
//             }
//         ]
//     },
//     {
//         "title": "Terminalia Arjuna MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Heart, blood pressure ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Thuja Occidentalis MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 150
//             }
//         ]
//     },
//     {
//         "title": "Tinospora Cordifolia MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Tribulus Terrestris MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Urtica Urens MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Uva Ursi MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 315
//             }
//         ]
//     },
//     {
//         "title": "Withania S, Ashwagandha MT",
//         "Company": null,
//         "Category": "Mother Tinctures",
//         "Tags": "Mother tincture ",
//         "subcategories": [
//             {
//                 "Package": "Q 30ml",
//                 "MRP": 105
//             }
//         ]
//     },
//     {
//         "title": "Bio combination No 1, 3X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Anaemia ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 2, 3X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Breathlessness ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 3, 3X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Colic",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 4, 3X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Constipation ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 5",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Coryza ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 6,3X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Cough, cold, catarrh",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 7,3X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Bio Combination ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 8, 3X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Diarrhoea ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 9",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Dysentery ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 10, 3X",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Enlarged Tonsils",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 11",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Bio Combination ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 12",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Headache ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 13",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Leucorrhoea ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 14",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Measles ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 15",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Uterine tonic ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 16",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Stress, exhaustion ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 17",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Piles, enlarged rectal veins",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 18",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Pyorrhoea",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 19",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Joint, muscle pain",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 20",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Skin disease ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 21",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Teething trouble ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 22",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Scrofula ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 23",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Toothache ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 24",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Debility, exhaustion ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 25",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Acidity, flatulence, indigestion ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 26",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Easy Parturition ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 110,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 27",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Lack of vitality ",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 95,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Bio Combination No 28",
//         "Company": null,
//         "Category": "Biochemics",
//         "Tags": "Tonic",
//         "subcategories": [
//             {
//                 "Package": "Tablets",
//                 "Size": "3x 25g",
//                 "MRP": 105,
//                 "Discounted Percentage": 10
//             }
//         ]
//     },
//     {
//         "title": "Y lax ",
//         "Company": null,
//         "Category": "Patents",
//         "Tags": "Constipation ",
//         "subcategories": [
//             {
//                 "MRP": 500
//             }
//         ]
//     },
//     {
//         "title": "Y Lax Tablets ",
//         "Company": null,
//         "Category": "Patents",
//         "Tags": "Constipation ",
//         "subcategories": [
//             {
//                 "MRP": 215
//             }
//         ]
//     },
//     {
//         "title": "Phytolacca Berry MT Tablets ",
//         "Company": null,
//         "Category": "Patents",
//         "Tags": "Weight Managment",
//         "subcategories": [
//             {
//                 "MRP": 160
//             }
//         ]
//     },
//     {
//         "title": "Arsenicum Album 30C",
//         "Company": null,
//         "Category": "Centesimal potency",
//         "Tags": "Dilution ",
//         "subcategories": [
//             {
//                 "Package": "CM 10ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Argentum Nitricum 30C",
//         "Company": null,
//         "Category": "Centesimal potency",
//         "Tags": "Dilution ",
//         "subcategories": [
//             {
//                 "Package": "30CH 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Allium Cepa 30C",
//         "Company": null,
//         "Category": "Centesimal potency",
//         "Tags": "Dilution ",
//         "subcategories": [
//             {
//                 "Package": "30CH 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Arsenicum Bromatum 30C",
//         "Company": null,
//         "Category": "Centesimal potency",
//         "Tags": "Dilution ",
//         "subcategories": [
//             {
//                 "Package": "30CH 30ml",
//                 "MRP": 95
//             }
//         ]
//     },
//     {
//         "title": "Acidum Nitricum 30C",
//         "Company": null,
//         "Category": "Centesimal potency",
//         "Tags": "Dilution ",
//         "subcategories": [
//             {
//                 "Package": "30CH 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Avena Sativa 30C",
//         "Company": null,
//         "Category": "Centesimal potency",
//         "Tags": "Dilution ",
//         "subcategories": [
//             {
//                 "Package": "30CH 30ml",
//                 "MRP": 100
//             }
//         ]
//     },
//     {
//         "title": "Acidum Muriaticum 30CH",
//         "Company": null,
//         "Category": "Centesimal potency",
//         "Tags": "Dilution ",
//         "subcategories": [
//             {
//                 "Package": "30CH 30ml",
//                 "MRP": 90
//             }
//         ]
//     }
// ]



