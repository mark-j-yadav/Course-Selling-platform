// controllers/comment.controller.js

import * as commentService from "../services/comment.service.js";

export const addComment = async (req, res) => {
  const comment = await commentService.addComment(
    req.user.id,
    req.body.courseId,
    req.body.text
  );

  res.json({
    success: true,
    data: comment,
  });
};

export const getComments = async (req, res) => {
  const comments = await commentService.getComments(
    req.params.courseId
  );

  res.json({
    success: true,
    data: comments,
  });
};

export const deleteComment = async (req, res) => {
  await commentService.deleteComment(req.params.id, req.user.id);

  res.json({
    success: true,
    message: "Comment deleted",
  });
};