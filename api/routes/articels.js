const express = require('express');
const router = express.Router();

const {getAllArticels,createArticle,updateArticle,deleteArticle
    
} = require('../controllers/articles')

router.get('/', getAllArticels);
router.post('/', createArticle);
router.patch('/:articleId', updateArticle);
router.delete('/:articleId', deleteArticle);
module.exports= router;