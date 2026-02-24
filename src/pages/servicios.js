import { cargarLogoHome, cargarNavHeader, CargarCarrusel, cargarBtnBurguer, cargarBtnWppFlotant, CargarFooter, cargarBtnMailFlotante, caragarBtnFacebookc, caragarBtnLigth, cargarDark, isDark, CambioColorHeader } from "../shared/Hooks/app.js"
import { cargarServicios } from "../featured/Servicios/Hooks/app.js";
cargarLogoHome();

cargarNavHeader();
CargarCarrusel();

cargarBtnBurguer();
cargarBtnMailFlotante();
cargarBtnWppFlotant();
caragarBtnFacebookc();
caragarBtnLigth();
cargarDark();

isDark();
CambioColorHeader();
CargarFooter();

cargarServicios();
