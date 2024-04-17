import styles from "./ProdutosPage.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProdutosPage() {
 return (
  <>
   <div className={styles.containerProdutos}>
    <div className={styles.logoPrincipal}>
     <img
      src="../../../src/assets/logo.png"
      alt="logo"
      width={400}
      height={400}
     />
    </div>
    <div className={styles.produtos}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Moletom Diana
       </Typography>
       <Typography variant="caption" display="block" gutterBottom>
        Cód: a0010
       </Typography>
       <Typography variant="body1" color="text.secondary">
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Moletom Diana
       </Typography>
       <Typography variant="caption" display="block" gutterBottom>
        Cód: a0010
       </Typography>
       <Typography variant="body2" color="text.secondary">
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Moletom Diana
       </Typography>
       <Typography variant="caption" display="block" gutterBottom>
        Cód: a0010
       </Typography>
       <Typography variant="body2" color="text.secondary">
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Moletom Diana
       </Typography>
       <Typography variant="caption" display="block" gutterBottom>
        Cód: a0010
       </Typography>
       <Typography variant="body2" color="text.secondary">
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Moletom Diana
       </Typography>
       <Typography variant="body2" color="text.secondary">
        <Typography variant="caption" display="block" gutterBottom>
         Cód: a0010
        </Typography>
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       sx={{ height: 200 }}
       image="../../../src/assets/image.png"
       title="green iguana"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Moletom Diana
       </Typography>
       <Typography variant="caption" display="block" gutterBottom>
        Cód: a0010
       </Typography>
       <Typography variant="body1" color="text.secondary">
        R$299.00
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Desconto de 5% no pix ou em 5x sem juros.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Comprar</Button>
      </CardActions>
     </Card>
    </div>
   </div>
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
