import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    name: "Adarsh Balika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        name: "Shubham Soni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        name: "Soham Shah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "You should be observant, talk less but listen more. This will make you a wise person.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    name: "Shubhum Soni",

    comments: [
      {
        _id: uuid(),
        username: "arjunsharma",
        name: "Arjun Sharma",
        text: "Great work, would love to hear more from you",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sunnysingh",
        name: "Sunny Singh",
        text: "Lets meet soon buddy, its been to long we didn't met",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The old owl had seen and heard about what happened to people. Some became better and some became worse. But the old owl had become wiser each and every day.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "abhishekSahani",
    name: "Abhishek Sahani",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "abhilashGupta",
        name: "Abhilash Gupta",
        text: "Interesting to know this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sameerKhan",
        name: "Sameer Khan",
        text: "Lets see what you got buddy",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "There was an old owl that lived in an oak. Everyday he saw incidents happening around him. Yesterday he saw a boy helping an old man to carry a heavy basket. Today he saw a girl shouting at her mother. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "msDhoni",
    name: "MS Dhoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "abhilashGupta",
        name: "Abhilash Gupta",
        text: "Yes, I bought a few things.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "biswaShah",
        name: "Biswa Shah",
        text: "I haven't seen him lately.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "The underlining principles would be truth, love, mutual respect, righteousness, rectitude, divinity, priority to societal unity, etc…",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "riyaGarg",
    name: "Riya Garg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "neelSuri",
        name: "Neel Suri",
        text: "Leave me a message, please.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "aaryaChoudhary",
        name: "Aarya Choudhary",
        text: "Yes, that's an easy game. I don't want to play that right now.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Here is a large collection of Moral Stories. From all regions of the world, this collection has been made to represent the true spirit of our culture. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akshayKumar",
    name: "Akshay Kumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "nishaPatel",
        name: "Nisha Patel",
        text: "We were very busy last week.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "cosmos09",
        name: "cosmos",
        text: "It's a pity we didn't visit Tom when we had the chance.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
