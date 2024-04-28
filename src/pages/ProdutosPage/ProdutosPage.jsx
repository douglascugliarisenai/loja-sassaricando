import styles from "./ProdutosPage.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function ProdutosPage() {
 return (
  <>
   <Grid
    container
    className={styles.containerProdutos}
    sx={{ display: "grid", mb: 15, ml: 10 }}>
    <Grid className={styles.logoPrincipal} xs={20}>
     <img
      src="../../../src/assets/logo.png"
      alt="logo"
      width={400}
      height={400}
     />
    </Grid>
    <Grid className={styles.produtos} xs={10}>
     <Card sx={{ maxWidth: 345, backgroundColor: "#d9d9d9", boxShadow: 5 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ textAlign: "center" }}>
        Moletom Diana
       </Typography>
       <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
         textAlign: "center",
         backgroundColor: "#bbb7b7",
         width: "100px",
         borderRadius: "5px"
        }}>
        Cód: a0010
       </Typography>
       <Typography
        variant="body1"
        color="text.secondary"
        sx={{
         mt: 1,
         mb: 1,
         textAlign: "start",
         size: "large",
         fontWeight: "bold"
        }}>
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions sx={{ width: "100%", justifyContent: "flex-end" }}>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345, backgroundColor: "#d9d9d9", boxShadow: 5 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ textAlign: "center" }}>
        Moletom Diana
       </Typography>
       <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
         textAlign: "center",
         backgroundColor: "#bbb7b7",
         width: "100px",
         borderRadius: "5px"
        }}>
        Cód: a0010
       </Typography>
       <Typography
        variant="body1"
        color="text.secondary"
        sx={{
         mt: 1,
         mb: 1,
         textAlign: "start",
         size: "large",
         fontWeight: "bold"
        }}>
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions sx={{ width: "100%", justifyContent: "flex-end" }}>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345, backgroundColor: "#d9d9d9", boxShadow: 5 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ textAlign: "center" }}>
        Moletom Diana
       </Typography>
       <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
         textAlign: "center",
         backgroundColor: "#bbb7b7",
         width: "100px",
         borderRadius: "5px"
        }}>
        Cód: a0010
       </Typography>
       <Typography
        variant="body1"
        color="text.secondary"
        sx={{
         mt: 1,
         mb: 1,
         textAlign: "start",
         size: "large",
         fontWeight: "bold"
        }}>
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions sx={{ width: "100%", justifyContent: "flex-end" }}>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345, backgroundColor: "#d9d9d9", boxShadow: 5 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ textAlign: "center" }}>
        Moletom Diana
       </Typography>
       <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
         textAlign: "center",
         backgroundColor: "#bbb7b7",
         width: "100px",
         borderRadius: "5px"
        }}>
        Cód: a0010
       </Typography>
       <Typography
        variant="body1"
        color="text.secondary"
        sx={{
         mt: 1,
         mb: 1,
         textAlign: "start",
         size: "large",
         fontWeight: "bold"
        }}>
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions sx={{ width: "100%", justifyContent: "flex-end" }}>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345, backgroundColor: "#d9d9d9", boxShadow: 5 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ textAlign: "center" }}>
        Moletom Diana
       </Typography>
       <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
         textAlign: "center",
         backgroundColor: "#bbb7b7",
         width: "100px",
         borderRadius: "5px"
        }}>
        Cód: a0010
       </Typography>
       <Typography
        variant="body1"
        color="text.secondary"
        sx={{
         mt: 1,
         mb: 1,
         textAlign: "start",
         size: "large",
         fontWeight: "bold"
        }}>
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions sx={{ width: "100%", justifyContent: "flex-end" }}>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345, backgroundColor: "#d9d9d9", boxShadow: 5 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ textAlign: "center" }}>
        Moletom Diana
       </Typography>
       <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
         textAlign: "center",
         backgroundColor: "#bbb7b7",
         width: "100px",
         borderRadius: "5px"
        }}>
        Cód: a0010
       </Typography>
       <Typography
        variant="body1"
        color="text.secondary"
        sx={{
         mt: 1,
         mb: 1,
         textAlign: "start",
         size: "large",
         fontWeight: "bold"
        }}>
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions sx={{ width: "100%", justifyContent: "flex-end" }}>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>
    </Grid>
   </Grid>

   <div className={styles.bannerLoja}>
    <Typography
     className={styles.textoBannerLoja}
     gutterBottom
     variant="h5"
     component="div"
     sx={{ color: "black" }}>
     Entrega personalizada! Entre em contato e descubra qual a mais vantajosa
    </Typography>
   </div>
  </>
 );
}

export default ProdutosPage;
