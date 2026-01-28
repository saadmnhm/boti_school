    <div id="stepperModal" class="stepper-modal  ">
        <div class="stepper-container container ">
            <!-- Header with Previous and Close buttons -->
            <div class="stepper-header">
                <button id="prevBtn" class="icon-btn prev-btn">
                        <img src="assets/images/prev.png" alt="">
                </button>
                <button id="closeBtn" class="icon-btn close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- Step 1 -->
            <div class="step step-1 active">
                <h2 class="step-title">Êtes-vous</h2>
                
                <div class="cards-container">
                    <div class="cards_stepper" data-value="option1">
                        <div>

                            <img src="assets/images/stp1_icon.png" alt="">
                        </div>
                        <p class="card-text">Tuteur d'un élève</p>
                    </div>
                    <div class="cards_stepper" data-value="option2">
                        <div>
                            <img src="assets/images/stp1_2icon.png" alt="">
                        </div>
                        <p class="card-text">Directeur / Fondateur</p>
                        <span class="card-text-span">( Nouveau client ) </span>
                    </div>
                </div>

                <p class="step-description">Choisissez l'une des deux options et appuyez sur <span>Continuer</span> pour terminer le processus.</p>

                <button class="btn-continue" id="continueStep1" disabled>Continuer</button>
            </div>

            <!-- Step 2 -->
            <div class="step step-2">
                <h3 class="step-2-header">Vous assurez quels cycles d'enseignement</h3>

                <div class="cards-container cards-4">
                    <div class="cards_stepper small-card" data-value="pref1">
                        <div>
                            <img src="assets/images/mater.png" alt="">
                        </div>
                        <p class="card-text">Maternelle</p>
                    </div>
                    <div class="cards_stepper small-card" data-value="pref2">
                        <div>
                            <img src="assets/images/school.png" alt="">
                        </div>
                        <p class="card-text">Primaire</p>
                    </div>
                    <div class="cards_stepper small-card" data-value="pref3">
                        <div>
                            <img src="assets/images/college.png" alt="">
                        </div>
                        <p class="card-text">Collège</p>
                    </div>
                    <div class="cards_stepper small-card" data-value="pref4">
                        <div>
                            <img src="assets/images/sup.png" alt="">
                        </div>
                        <p class="card-text">Lycée</p>
                    </div>
                </div>

                <h3 class="step-2-header">Quel est le nombre total d'élèves ?</h3>

                <div class="progress-container">
                    <span class="progress-min">0</span>
                    <input type="range" id="budgetRange" class="progress-bar" min="0" max="1000" value="0">
                    <span class="progress-max" id="budgetValue">0</span>
                </div>

                <h3 class="step-2-header">Votre informations</h3>

                <div class="form-row">
                    <div class="input-wrapper">
                        <input type="text" id="firstName" class="form-input" placeholder="Nom & Prénom * " required>
                        <div class="error-message"><img src="assets/images/warning.png" alt="" style="max-width: 20px;"> Champ obligatoire</div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" id="lastName" class="form-input" placeholder="Nom de votre école * " required>
                        <div class="error-message"><img src="assets/images/warning.png" alt="" > Champ obligatoire</div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-wrapper">
                        <input type="tel" id="phone" class="form-input" placeholder="Numéro de Téléphone * " required>
                        <div class="error-message"><img src="assets/images/warning.png" alt="" > Champ obligatoire</div>
                    </div>
                    <div class="input-wrapper">
                        <input type="email" id="email" class="form-input" placeholder="Adresse E-mail *" required>
                        <div class="error-message"><img src="assets/images/warning.png" alt="" > Champ obligatoire</div>
                    </div>
                    <div class="input-wrapper">
                        <select id="address" class="form-input" placeholder="Adresse" required>
                            <option value="" disabled selected>Adresse *</option>
                            <option value="address1">Adresse 1</option>
                            <option value="address2">Adresse 2</option>
                            <option value="address3">Adresse 3</option>
                        </select>
                        <div class="error-message"><i class="fas fa-exclamation"></i> Champ obligatoire</div>
                    </div>
                </div>
                <p class="oblig-chmp">* pour les champs obligatoire</p>

                <button class="btn-continue" id="continueStep2" disabled>Demander une présentation</button>
            </div>

            <!-- Success Step -->
            <div class="step step-success">
                <div class="success-content">
                    <i class="fas fa-check-circle success-icon"></i>
                    <h2 class="success-title">Votre demande a été envoyée.</h2>
                    <p class="success-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button class="btn-continue" id="closeSuccess">Fermer</button>
                </div>
            </div>
        </div>
    </div>