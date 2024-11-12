import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
	return (
		<Container component="main">
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100vh",
				}}
			>
				<Typography variant="h1">Hello World!</Typography>
			</Box>
		</Container>
	);
}

export default App;
