import { Container, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";
import './Footer.css';

export default function Footer() {

  return(
    <Box bgcolor="lightblue" color="grey" className="footerBox">
      <Container maxWidth="1g">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} >
            <Box borderBottom={1}>Contact Us</Box>
            <Box>
              <Typography>
                Email : SrudentInfo@gmail.com
              </Typography>
            </Box>

            <Box>
               <Typography>
                Phone Number : 9876543210
              </Typography>
            </Box>

          </Grid>

          <Grid item xs={12} sm={4} className="home">
            <Box borderBottom={1}>Home</Box>
            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

            <Box>
              <Link href="/students/add" color="inherit">
                AddStudent
              </Link>
            </Box>

            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

          </Grid>


          
                 
        </Grid>

        <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}} >
          Student CRUDapp@2022
        </Box>
      </Container>
    </Box>
  );
  
}