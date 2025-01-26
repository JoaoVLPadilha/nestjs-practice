'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' : 'data-bs-target="#xs-controllers-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' :
                                            'id="xs-controllers-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' : 'data-bs-target="#xs-injectables-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' :
                                        'id="xs-injectables-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-a06756dc66ab1ffd8132b42016f769139c8ac930ba6018574d41b809ea100f117b461770bb4a0411057abfeb11c1ea671e883f2c550865de9bd9c12525358888"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-a06756dc66ab1ffd8132b42016f769139c8ac930ba6018574d41b809ea100f117b461770bb4a0411057abfeb11c1ea671e883f2c550865de9bd9c12525358888"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a06756dc66ab1ffd8132b42016f769139c8ac930ba6018574d41b809ea100f117b461770bb4a0411057abfeb11c1ea671e883f2c550865de9bd9c12525358888"' :
                                            'id="xs-controllers-links-module-AuthModule-a06756dc66ab1ffd8132b42016f769139c8ac930ba6018574d41b809ea100f117b461770bb4a0411057abfeb11c1ea671e883f2c550865de9bd9c12525358888"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-a06756dc66ab1ffd8132b42016f769139c8ac930ba6018574d41b809ea100f117b461770bb4a0411057abfeb11c1ea671e883f2c550865de9bd9c12525358888"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-a06756dc66ab1ffd8132b42016f769139c8ac930ba6018574d41b809ea100f117b461770bb4a0411057abfeb11c1ea671e883f2c550865de9bd9c12525358888"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a06756dc66ab1ffd8132b42016f769139c8ac930ba6018574d41b809ea100f117b461770bb4a0411057abfeb11c1ea671e883f2c550865de9bd9c12525358888"' :
                                        'id="xs-injectables-links-module-AuthModule-a06756dc66ab1ffd8132b42016f769139c8ac930ba6018574d41b809ea100f117b461770bb4a0411057abfeb11c1ea671e883f2c550865de9bd9c12525358888"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' :
                                            'id="xs-controllers-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' :
                                        'id="xs-injectables-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-9f36e72b7fa0663bce0a3eae4d85ce19fa7420f8a6e94791ec3b7a05e35ba20ffb7b4649ebf869e2c437fa3990e21da6bc84029a4cac64d0d51303c66f9169b2"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-9f36e72b7fa0663bce0a3eae4d85ce19fa7420f8a6e94791ec3b7a05e35ba20ffb7b4649ebf869e2c437fa3990e21da6bc84029a4cac64d0d51303c66f9169b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-9f36e72b7fa0663bce0a3eae4d85ce19fa7420f8a6e94791ec3b7a05e35ba20ffb7b4649ebf869e2c437fa3990e21da6bc84029a4cac64d0d51303c66f9169b2"' :
                                            'id="xs-controllers-links-module-UsersModule-9f36e72b7fa0663bce0a3eae4d85ce19fa7420f8a6e94791ec3b7a05e35ba20ffb7b4649ebf869e2c437fa3990e21da6bc84029a4cac64d0d51303c66f9169b2"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-9f36e72b7fa0663bce0a3eae4d85ce19fa7420f8a6e94791ec3b7a05e35ba20ffb7b4649ebf869e2c437fa3990e21da6bc84029a4cac64d0d51303c66f9169b2"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-9f36e72b7fa0663bce0a3eae4d85ce19fa7420f8a6e94791ec3b7a05e35ba20ffb7b4649ebf869e2c437fa3990e21da6bc84029a4cac64d0d51303c66f9169b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-9f36e72b7fa0663bce0a3eae4d85ce19fa7420f8a6e94791ec3b7a05e35ba20ffb7b4649ebf869e2c437fa3990e21da6bc84029a4cac64d0d51303c66f9169b2"' :
                                        'id="xs-injectables-links-module-UsersModule-9f36e72b7fa0663bce0a3eae4d85ce19fa7420f8a6e94791ec3b7a05e35ba20ffb7b4649ebf869e2c437fa3990e21da6bc84029a4cac64d0d51303c66f9169b2"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostsDto.html" data-type="entity-link" >CreatePostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});