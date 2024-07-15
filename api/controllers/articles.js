const Article = require('../models/article');

module.exports = {
    getAllArticels: (req,res)=>{
        res.status(200).json({
            message: 'Get All Articels' 
        })
    
    },
    createArticle:(req,res)=>{
        const {title,description,content} = req.body;

        const article = new Article();
        res.status(200).json({
            message: 'Create a new article' 
        })
    
    },
    updateArticle: (req, res) => {
        const articleId = req.params.articleId;
    
        // בדיקה האם האיידי של המאמר קיים בפרמטרים
        if (!articleId) {
            return res.status(400).json({
                message: "Article ID is required"
            });
        }
    
        // טפל בעדכון המאמר כאן
        // לדוגמה, אפשר להוסיף לוגיקה לעדכון המאמר במסד נתונים
    
        res.status(200).json({
            message: `Update article - ${articleId}`
        });
    },
    deleteArticle: (req, res) => {
        const articleId = req.params.articleId;
    
        // בדיקה האם האיידי של המאמר קיים בפרמטרים
        if (!articleId) {
            return res.status(400).json({
                message: "Article ID is required"
            });
        }
    
        // טפל במחיקת המאמר כאן
        // לדוגמה, אפשר להוסיף לוגיקה למחיקת המאמר במסד נתונים
    
        res.status(200).json({
            message: `Delete article - ${articleId}`
        });
    }
    

}