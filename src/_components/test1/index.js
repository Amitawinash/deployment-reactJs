import React, {useState, useEffect} from 'react';
import {TextField, Button, ButtonGroup} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {ArrowDropUp, ArrowDropDown} from '@material-ui/icons';
import BlogTable from "./BlogTable";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const articleData = [
  {
    "articleId" : 1,
    "title": "Harry Potter and the Sorcerer’s Stone Review",
    "upvotes": 56,
      "date": "12/23/2016"
  },

  {
    "articleId" : 2,
    "title": "Harry Potter and the Half Blood Prince Review",
    "upvotes": 23,
    "date": "12/2/2016"
  },
  {
    "articleId" : 3,
    "title": "Harry Potter and the Goblet of Fire Review",
    "upvotes": 333,
    "date": "11/2/2017"
  },
  {
    "articleId" : 4,
    "title": "Harry Potter and the Goblet of Fire Review 4",
    "upvotes": 333,
    "date": "11/2/2017"
  }
]


// const getArticles =  async (authorName) => {
//   try {
//     const res = await axios.get(`/articles?authorName=${authorName}`, );
//     return res.data
//   } catch (e) {

//   }
// }

const getApi = () => {
  return  new Promise((resolve, reject) => {
    setTimeout( function() {
      resolve(articleData)  
    }, 2500) 
  });
}
const Index = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [upvotesOrder, setUpvotes] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleInput = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setIsSearching(true)
    getApi(searchTerm)
      .then((results) => {
        setIsSearching(false);
        setArticles(results.filter(result => {
          return result.title && result.title.length
        } ));

    })
      .catch(() => {})

  };

  const  handleUpvort = () => {
    let items = articles.sort(function(a, b) { 
      return upvotesOrder ? b.upvotes - a.upvotes : a.upvotes - b.upvotes ;
    });
    setArticles(pre => [...items]);
    setUpvotes(pre => !pre)
  }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TextField onChange={handleInput} value={searchTerm}/>
            <Button variant="contained" onClick={handleSearch} disabled={!searchTerm && searchTerm.length === 0 || isSearching}>
              Search
            </Button>
          </Paper>
        </Grid>
        {articles.length && <>
          <Grid item xs={12}>
            <ButtonGroup variant="contained" color="primary">
                <Button>Date <ArrowDropUp/> </Button>
                <Button onClick={handleUpvort}>Upvotes 
                {upvotesOrder && <ArrowDropDown/>}
                {!upvotesOrder && <ArrowDropUp/>}
                </Button>
            </ButtonGroup>
          </Grid>
        </>
        }

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {articles && articles.length > 0 &&
              <BlogTable rows={articles}/>
            }
          </Paper>
        </Grid>
      </Grid>

    </div>
  )
}

export default Index;