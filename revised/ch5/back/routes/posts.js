const express = require('express');
const { Op } = require('sequelize');

const { Post, User, Image, Comment } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)){    // 초기 로딩이 아닐 때
            where.id = { [Op.lt]:  parseInt(req.query.lastId, 10) }
        }
        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                    order: [['createdAt', 'DESC']],
                }],
            }, {
                model: User,    // 좋아요 누른사람
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }]
            }],
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;