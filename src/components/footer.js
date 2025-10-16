import React from "react";

function FooterPrincipal() {
    return (
        <div className="row mt-5 bg-success">
            <div className="col-lg-12 text-center p-2 text-white">
                <div className="btn-descarga">
                    <a href="https://open.shop.app/E2jp6/yphyl/7qog" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                            alt="Descargar en App Store"
                            width="120"
                        />
                    </a>
                    <a href="https://open.shop.app/E2jp6/frmk/3n2h" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
                            alt="Descargar en Google Play"
                            width="135"
                        />
                    </a>
                </div>

                <p>©2025 Level-Up Gamer. Todos los derechos reservados.</p>

                <a
                    className="btn btn-secondary"
                    href="https://wa.me/569123445/?text=Hola"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Contactanos por WHATSAPP
                </a>
            </div>
        </div>
    );
}

export default FooterPrincipal; 