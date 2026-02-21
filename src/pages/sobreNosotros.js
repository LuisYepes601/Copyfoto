import {
    cargarLogoHome, cargarNavHeader, CargarCarrusel,
    cargarBtnMailFlotante, cargarBtnWppFlotant, isDark, cargarDark, caragarBtnLigth, caragarBtnFacebookc, CargarFooter, cargarBtnBurguer, CambioColorHeader
} from "../shared/Hooks/app.js"

import { cargarHistory, cargarPropositos,cargarValores } from "../featured/sobreNosotros/Hooks/app.js";


CambioColorHeader();

cargarLogoHome();

cargarNavHeader();

CargarCarrusel();

cargarBtnBurguer();

cargarHistory();

cargarPropositos();

cargarValores();

/**Botones flotantes */
cargarBtnWppFlotant();

cargarBtnMailFlotante();

caragarBtnFacebookc();

caragarBtnLigth();

cargarDark();

isDark();

CargarFooter();

