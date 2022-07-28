import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: "https://semantic-ui.com/images/avatar2/large/matthew.png",
    bio: "Sharing my happy thoughts",
    portfolio: "https://www.lipsum.com/",
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Sahani",
    username: "abhishekSahani",
    password: "abhishekSahani123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://media-exp1.licdn.com/dms/image/C5603AQEqEDNWTDG0UQ/profile-displayphoto-shrink_200_200/0/1630987867284?e=1664409600&v=beta&t=d6uKvEjdpd-jVesvCh-gwCBsQdQ3YEcNr3gtjE31Npw",
    bio: "A Homosapien evolved to do software development, storytelling and art",
    portfolio: "https://www.lipsum.com/",
  },
  {
    _id: uuid(),
    firstName: "Riya",
    lastName: "Garg",
    username: "riyaGarg",
    password: "riyaGarg123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: "https://semantic-ui.com/images/avatar2/large/kristy.png",
    bio: "Trying to be a rainbow in someone’s cloud.",
    portfolio: "https://www.lipsum.com/",
  },
  {
    _id: uuid(),
    firstName: "Akshay",
    lastName: "Kumar",
    username: "akshayKumar",
    password: "akshayKumar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://pbs.twimg.com/profile_images/1513413525187743746/JVdygchC_400x400.jpg",
    bio: "Actor",
    portfolio: "https://www.lipsum.com/",
  },
  {
    _id: uuid(),
    firstName: "MS",
    lastName: "Dhoni",
    username: "msDhoni",
    password: "msDhoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6BOwb5LswFo1EPk8hCMdmCPL6F5nyQ5OAw&usqp=CAU",
    bio: "The Finisher",
    portfolio: "https://www.lipsum.com/",
  },
];
