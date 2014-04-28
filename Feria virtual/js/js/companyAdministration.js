function fillStates(target)
{
    $(target).html(''+
      '<option value="0" selected>         Todas               </option>'+
      '<option value="Buenos Aires">       Buenos Aires        </option>'+
      '<option value="Córdoba">            Córdoba             </option>'+
      '<option value="Capital Federal">    Capital Federal     </option>'+
      '<option value="Catamarca">          Catamarca           </option>'+
      '<option value="Chaco">              Chaco               </option>'+
      '<option value="Chubut">             Chubut              </option>'+
      '<option value="Corrientes">         Corrientes          </option>'+
      '<option value="Entre Ríos">         Entre Ríos          </option>'+
      '<option value="Formosa">            Formosa             </option>'+
      '<option value="Jujuy">              Jujuy               </option>'+
      '<option value="La Pampa">           La Pampa            </option>'+
      '<option value="La Rioja">           La Rioja            </option>'+
      '<option value="Mendoza">            Mendoza             </option>'+
      '<option value="Misiones">           Misiones            </option>'+
      '<option value="Neuquén">            Neuquén             </option>'+
      '<option value="Rio Negro">          Rio Negro           </option>'+
      '<option value="Salta">              Salta               </option>'+
      '<option value="San Juan">           San Juan            </option>'+
      '<option value="San Luis">           San Luis            </option>'+
      '<option value="Santa Cruz">         Santa Cruz          </option>'+
      '<option value="Santa Fé">           Santa Fé            </option>'+
      '<option value="Santiago del Estero">Santiago del Estero </option>'+
      '<option value="Tierra del Fuego">   Tierra del Fuego    </option>'+
      '<option value="Tucuman">            Tucuman             </option>');
}

function fillAges(target)
{
    $(target).html(''+
      '<option value="0" selected>         Indistinto               </option>'+
      '<option value="18 a 21">            18 a 21                  </option>'+
      '<option value="22 a 25">            22 a 25                  </option>'+
      '<option value="26 a 29">            26 a 29                  </option>'+
      '<option value="30 a 33">            30 a 33                  </option>'+
      '<option value="34 a 37">            34 a 37                  </option>'+
      '<option value="38 a 41">            38 a 41                  </option>'+
      '<option value="42 a 45">            42 a 45                  </option>'+
      '<option value="mas">                +mas                     </option>'
      );
}

function fillDegrees(target)
{
  $(target).html(''+
   '<option value="0">                              Todas                                   </option>'+   
    '<optgroup label="Diseño y Arquitectura">'                                                        +
    '<option value="Arquitectura">                  Arquitectura                            </option>'+
    '<option value="Dibujo tecnico">                Dibujo Técnico                          </option>'+
    '<option value="Diseño grafico">                Diseño Gráfico                          </option>'+
    '<option value="Diseño industrial">             Diseño industrial                       </option>'+
    '<option value="Diseño multimedial">            Diseño multimedial                      </option>'+
    '<option value="Diseño web">                    Diseño Web                              </option>'+
    '</optgroup>'                                                                                     +
    '<optgroup label="Economicas">'                                                                   +                                  
    '<option value="Actuario">                      Actuario                                </option>'+
    '<option value="Adm. Agropecuaria">             Adm. Agropecuaria                       </option>'+
    '<option value="Adm. de empresas">              Adm. de Empresas                        </option>'+
    '<option value="Adm. y gestion publica">        Adm. y Gestión Pública                  </option>'+
    '<option value="Comercio internacional">        Comercio Internacional / Exterior       </option>'+
    '<option value="Contabilidad">                  Contabilidad / Auditoría                </option>'+
    '<option value="Economia">                      Economía                                </option>'+
    '<option value="Finanzas">                      Finanzas                                </option>'+
    '<option value="Marketing">                     Marketing / Comercialización            </option>'+
    '<option value="Negociacion">                   Negociación                             </option>'+
    '<option value="Organizacion insdustrial">      Organización industrial                 </option>'+
    '<option value="RRHH">                          Recursos Humanos/Relaciones Laborales   </option>'+
    '<option value="Sistemas de informacion">       Sistemas de Información                 </option>'+
    '</optgroup>'                                                                                     +
    '<optgroup label="Exactas y Naturales">'                                                          +
    '<option value="Agrimensor">                    Agrimensor                              </option>'+
    '<option value="Arqueologia">                   Arqueología                             </option>'+
    '<option value="Bioingenieria">                 Bioingeniería                           </option>'+
    '<option value="Bioquimica">                    Bioquímica                              </option>'+
    '<option value="Cartografia">                   Cartografía                             </option>'+
    '<option value="Ciencias fisicas">              Ciencias Físicas                        </option>'+
    '<option value="Geofisica">                     Geofísica                               </option>'+
    '<option value="Geologia">                      Geología / Geomensura / Topografía      </option>'+
    '<option value="Quimica">                       Química                                 </option>'+
    '<option value="Tecnologia de alimentos">       Tecnología de Alimentos                 </option>'+
    '</optgroup>'                                                                                     +
    '<optgroup label="Ingeniería y Tecnicatura">'                                                     +
    '<option value="Higiene y seguridad">           Higiene y Seguridad en el Trabajo       </option>'+
    '<option value="Ing. aeroespacial">             Ing. Aeroespacial                       </option>'+
    '<option value="Ing. aeronautica">              Ing. Aeronáutica                        </option>'+
    '<option value="Ing. agronoma">                 Ing. Agrónoma / Agropecuaria            </option>'+
    '<option value="Ing. alimentos">                Ing. Alimentos                          </option>'+
    '<option value="Ing. ambiental">                Ing. Ambiental                          </option>'+
    '<option value="Ing. civil">                    Ing. Civil                              </option>'+
    '<option value="Ing. electrica">                Ing. Eléctrica                          </option>'+
    '<option value="Ing. electromecanica">          Ing. Electromecánica                    </option>'+
    '<option value="Ing. electronica">              Ing. Eléctronica                        </option>'+
    '<option value="Ing. en minas">                 Ing. en Minas                           </option>'+
    '<option value="Ing. forestal">                 Ing. Forestal                           </option>'+
    '<option value="Ing. hidraulica">               Ing. Hidráulica                         </option>'+
    '<option value="Ing. industrial">               Ing. Industrial                         </option>'+
    '<option value="Ing. matematica">               Ing. Matemática                         </option>'+
    '<option value="Ing. materiales">               Ing. Materiales                         </option>'+
    '<option value="Ing. mecanica">                 Ing. Mecánica / Metalúrgica             </option>'+
    '<option value="Ing. mecatronica">              Ing. Mecatrónica                        </option>'+
    '<option value="Ing. naval">                    Ing. Naval                              </option>'+
    '<option value="Ing. nuclear">                  Ing. Nuclear                            </option>'+
    '<option value="Ing. pesquera">                 Ing. Pesquera / Cultivos Marinos        </option>'+
    '<option value="Ing. petroleo">                 Ing. Petróleo                           </option>'+
    '<option value="Ing. quimica">                  Ing. Química                            </option>'+
    '<option value="Ing. recursos hidraulicos">     Ing. Recursos Hídricos                  </option>'+
    '<option value="Ing. sonido">                   Ing. Sonido                             </option>'+
    '<option value="Ing. telecomunicaciones">       Ing. Telecomunicaciones                 </option>'+
    '<option value="Ing. textil">                   Ing. Textil                             </option>'+
    '<option value="Seguridad industrial">          Seguridad Industrial                    </option>'+
    '<option value="Tecn. electricidad">            Tecn. Electricidad                      </option>'+
    '<option value="Tecn. electronica">             Tecn. Electrónica                       </option>'+
    '<option value="Tecn. mecanica">                Tecn. Mecánica                          </option>'+
    '<option value="Tecn. optico">                  Tecn. Óptico                            </option>'+
    '<option value="Tecn. telecomunicaciones">      Tecn. Telecomunicaciones                </option>'+
    '<option value="Lic. Organización Industrial">  Lic. en Organización Industrial         </option>'+
    '</optgroup>'                                                                                     +
    '<optgroup label="Sistemas">'                                                                     +
    '<option value="analisis de sistemas">          Análisis de Sistemas                    </option>'+
    '<option value="Computacion">                   Computación                             </option>'+
    '<option value="Ing. informatica">              Ing. Informática / sistemas             </option>'+
    '<option value="Programacion">                  Programación                            </option>'+
    '<option value="Redes">                         Redes                                   </option>'+
    '<option value="Sistemas/tecnologia">           Sistemas / Tecnología                   </option>'+
    '</optgroup>'                                                                                     +
    '<option value="Otra carrera">                  Otra carrera                            </option>');
};

function fillUniversities(target)
{
    $(target).html(''+
    '<option value="0"> Todas </option>'+
    '<option value="Centro de Altos Estudios en Ciencias Exactas">                       Centro de Altos Estudios en Ciencias Exactas (CAECE)                            </option>'+
    '<option value="Colegio Universitario IES Siglo 21">                                 Colegio Universitario IES Siglo 21                                              </option>'+
    '<option value="Escuela Argentina de Negocios">                                      Escuela Argentina de Negocios                                                   </option>'+
    '<option value="Escuela de Direccion y Negocios de la Universidad Austral">          Escuela de Dirección y Negocios de la Universidad Austral (IAE)                 </option>'+
    '<option value="Fundacion de Altos Estudios en Ciencias Comerciales">                Fundación de Altos Estudios en Ciencias Comerciales                             </option>'+
    '<option value="Instituto para el Desarrollo Empresarial de la Argentina (IDEA)">    Instituto para el Desarrollo Empresarial de la Argentina (IDEA)                 </option>'+
    '<option value="Instituto Universitario Aeronautico (IUA)">                          Instituto Universitario Aeronáutico (IUA)                                       </option>'+
    '<option value="Instituto Tecnologico De Buenos Aires">                              Instituto Tecnológico De Buenos Aires                                           </option>'+
    '<option value="Universidad FASTA - Mar del Plata">                                  Universidad FASTA - Mar del Plata                                               </option>'+
    '<option value="Universidad Abierta Interamericana (UAI)">                           Universidad Abierta Interamericana (UAI)                                        </option>'+
    '<option value="Universidad Argentina John F. Kennedy">                              Universidad Argentina John F. Kennedy                                           </option>'+
    '<option value="Universidad Blas Pascal">                                            Universidad Blas Pascal                                                         </option>'+
    '<option value="Universidad Catolica Argentina de Cuyo">                             Universidad Católica Argentina de Cuyo                                          </option>'+
    '<option value="Universidad Catolica Argentina de La Plata">                         Universidad Católica Argentina de La Plata                                      </option>'+
    '<option value="Universidad Catolica Argentina de Mendoza">                          Universidad Católica Argentina de Mendoza                                       </option>'+
    '<option value="Universidad de Aconcagua (UDA)">                                     Universidad de Aconcagua (UDA)                                                  </option>'+
    '<option value="Universidad de Congreso">                                            Universidad de Congreso                                                         </option>'+
    '<option value="Universidad de Flores (UFLO)">                                       Universidad de Flores (UFLO)                                                    </option>'+
    '<option value="Universidad de San Andres (UDESA)">                                  Universidad de San Andrés (UDESA)                                               </option>'+
    '<option value="Universidad del Cema (UCEMA)">                                       Universidad del Cema (UCEMA)                                                    </option>'+
    '<option value="Universidad del Centro Educativo Latinoamericano (UCEL)">            Universidad del Centro Educativo Latinoamericano (UCEL)                         </option>'+
    '<option value="Universidad del Salvador (USAL)">                                    Universidad del Salvador (USAL)                                                 </option>'+
    '<option value="Universidad Empresarial Siglo 21">                                   Universidad Empresarial Siglo 21                                                </option>'+
    '<option value="Universidad Maimonides">                                             Universidad Maimónides                                                          </option>'+
    '<option value="Universidad Nacional de Catamarca">                                  Universidad Nacional de Catamarca                                               </option>'+
    '<option value="Universidad Nacional de Entre Rios">                                 Universidad Nacional de Entre Ríos                                              </option>'+
    '<option value="Universidad Nacional de Formosa">                                    Universidad Nacional de Formosa                                                 </option>'+
    '<option value="Universidad Nacional de Lanus">                                      Universidad Nacional de Lanús                                                   </option>'+
    '<option value="Universidad Nacional de Quilmes">                                    Universidad Nacional de Quilmes                                                 </option>'+
    '<option value="Universidad Nacional de Rio Cuarto">                                 Universidad Nacional de Rio Cuarto                                              </option>'+
    '<option value="Universidad Nacional de San Martin (UNSAM)">                         Universidad Nacional de San Martin (UNSAM)                                      </option>'+
    '<option value="Universidad Nacional de Santiago del Estero">                        Universidad Nacional de Santiago del Estero                                     </option>'+
    '<option value="Universidad Nacional de Tres de Febrero">                            Universidad Nacional de Tres de Febrero                                         </option>'+
    '<option value="Universidad Nacional de Villa Maria">                                Universidad Nacional de Villa María                                             </option>'+
    '<option value="Universidad Nacional del Comahue">                                   Universidad Nacional del Comahue                                                </option>'+
    '<option value="Universidad Torcuato Di Tella (UTDT)">                               Universidad Torcuato Di Tella (UTDT)                                            </option>'+
    '<option value="Universidad de Ciencias Empresariales y Sociales (UCES)">            Universidad de Ciencias Empresariales y Sociales (UCES)                         </option>'+
    '<option value="Centro de Altos Estudios en Ciencias Exactas (CAECE)">               Centro de Altos Estudios en Ciencias Exactas (CAECE)                            </option>'+
    '<option value="Colegio Universitario IES Siglo 21">                                 Colegio Universitario IES Siglo 21                                              </option>'+
    '<option value="Escuela Argentina de Negocios">                                      Escuela Argentina de Negocios                                                   </option>'+
    '<option value="Escuela de Dirección y Negocios de la Universidad Austral (IAE)">    Escuela de Dirección y Negocios de la Universidad Austral (IAE)                 </option>'+
    '<option value="Fundación de Altos Estudios en Ciencias Comerciales">                Fundación de Altos Estudios en Ciencias Comerciales                             </option>'+
    '<option value="Instituto para el Desarrollo Empresarial de la Argentina (IDEA)">    Instituto para el Desarrollo Empresarial de la Argentina (IDEA)                 </option>'+
    '<option value="Universidad Argentina De La Empresa">                                Universidad Argentina De La Empresa                                             </option>'+
    '<option value="Universidad Austral">                                                Universidad Austral                                                             </option>'+
    '<option value="Universidad Catolica Argentina (Sede Buenos Aires)">                 Universidad Católica Argentina (Sede Buenos Aires)                              </option>'+
    '<option value="Universidad Catolica Argentina (Sede Rosario)">                      Universidad Católica Argentina (Sede Rosario)                                   </option>'+
    '<option value="Universidad Catolica De Córdoba">                                    Universidad Católica De Córdoba                                                 </option>'+
    '<option value="Universidad Catolica De Salta">                                      Universidad Católica De Salta                                                   </option>'+
    '<option value="Universidad De Belgrano">                                            Universidad De Belgrano                                                         </option>'+
    '<option value="Universidad De Buenos Aires">                                        Universidad De Buenos Aires                                                     </option>'+
    '<option value="Universidad De La Marina Mercante">                                  Universidad De La Marina Mercante                                               </option>'+
    '<option value="Universidad De Mendoza">                                             Universidad De Mendoza                                                          </option>'+
    '<option value="Universidad De Moron">                                               Universidad De Morón                                                            </option>'+
    '<option value="Universidad De Palermo">                                             Universidad De Palermo                                                          </option>'+
    '<option value="Universidad Del Norte Santo Tomas De Aquino (Tucuman)">              Universidad Del Norte Santo Tomás De Aquino (Tucumán)                           </option>'+
    '<option value="Universidad Del Salvador">                                           Universidad Del Salvador                                                        </option>'+
    '<option value="Universidad Frat. De Agrup. Santo Tomas De Aquino">                  Universidad Frat. De Agrup. Santo Tomas De Aquino                               </option>'+
    '<option value="Universidad Nacional De Cordoba">                                    Universidad Nacional De Córdoba                                                 </option>'+
    '<option value="Universidad Nacional De Cuyo (Mendoza)">                             Universidad Nacional De Cuyo (Mendoza)                                          </option>'+
    '<option value="Universidad Nacional De General Sarmiento (Los Polvorines)">         Universidad Nacional De General Sarmiento (Los Polvorines)                      </option>'+
    '<option value="Universidad Nacional De Jujuy">                                      Universidad Nacional De Jujuy                                                   </option>'+
    '<option value="Universidad Nacional De La Matanza">                                 Universidad Nacional De La Matanza                                              </option>'+
    '<option value="Universidad Nacional De La Patagonia (Comodoro Rivadavia)">          Universidad Nacional De La Patagonia (Comodoro Rivadavia)                       </option>'+
    '<option value="Universidad Nacional De La Patagonia Austral (Caleta Olivia)">       Universidad Nacional De La Patagonia Austral (Caleta Olivia)                    </option>'+
    '<option value="Universidad Nacional De La Plata">                                   Universidad Nacional De La Plata                                                </option>'+
    '<option value="Universidad Nacional De La Rioja">                                   Universidad Nacional De La Rioja                                                </option>'+
    '<option value="Universidad Nacional De Lomas De Zamora">                            Universidad Nacional De Lomas De Zamora                                         </option>'+
    '<option value="Universidad Nacional De Lujan">                                      Universidad Nacional De Luján                                                   </option>'+
    '<option value="Universidad Nacional De Mar del Plata">                              Universidad Nacional De Mar del Plata                                           </option>'+
    '<option value="Universidad Nacional De Misiones (Obera)">                           Universidad Nacional De Misiones (Obera)                                        </option>'+
    '<option value="Universidad Nacional De Rosario">                                    Universidad Nacional De Rosario                                                 </option>'+
    '<option value="Universidad Nacional De Salta">                                      Universidad Nacional De Salta                                                   </option>'+
    '<option value="Universidad Nacional De San Juan">                                   Universidad Nacional De San Juan                                                </option>'+
    '<option value="Universidad Nacional De San Luis (Villa Mercedes)">                  Universidad Nacional De San Luís (Villa Mercedes)                               </option>'+
    '<option value="Universidad Nacional De Tucuman">                                    Universidad Nacional De Tucumán                                                 </option>'+
    '<option value="Universidad Nacional Del Centro De La Pcia. De Bs. As.">             Universidad Nacional Del Centro De La Pcia. De Bs. As.                          </option>'+
    '<option value="Universidad Nacional del Chaco Austral">                             Universidad Nacional del Chaco Austral                                          </option>'+
    '<option value="Universidad Nacional Del Litoral (Santa Fe)">                        Universidad Nacional Del Litoral (Santa Fe)                                     </option>'+
    '<option value="Universidad Nacional Del Noroeste De La Pcia. De Bs. As. (Junin)">   Universidad Nacional Del Noroeste De La Pcia. De Bs. As. (Junin)                </option>'+
    '<option value="Universidad Nacional Del Sur (Bahia Blanca)">                        Universidad Nacional Del Sur (Bahía Blanca)                                     </option>'+
    '<option value="UTN Facultad Regional Avellaneda">                                   UTN Facultad Regional Avellaneda                                                </option>'+
    '<option value="UTN Facultad Regional Bahia Blanca (LOI)">                           UTN Facultad Regional Bahía Blanca (LOI)                                        </option>'+
    '<option value="UTN Facultad Regional Buenos Aires">                                 UTN Facultad Regional Buenos Aires                                              </option>'+
    '<option value="UTN Facultad Regional Concepcion del Uruguay">                       UTN Facultad Regional Concepción del Uruguay                                    </option>'+
    '<option value="UTN Facultad Regional Cordoba">                                      UTN Facultad Regional Córdoba                                                   </option>'+
    '<option value="UTN Facultad Regional General Pacheco (LOI)">                        UTN Facultad Regional General Pacheco (LOI)                                     </option>'+
    '<option value="UTN Facultad Regional Haedo">                                        UTN Facultad Regional Haedo                                                     </option>'+
    '<option value="UTN Facultad Regional La Plata">                                     UTN Facultad Regional La Plata                                                  </option>'+
    '<option value="UTN Facultad Regional La Rioja">                                     UTN Facultad Regional La Rioja                                                  </option>'+
    '<option value="UTN Facultad Regional Rafaela">                                      UTN Facultad Regional Rafaela                                                   </option>'+
    '<option value="UTN Facultad Regional Rio Grande">                                   UTN Facultad Regional Río Grande                                                </option>'+
    '<option value="UTN Facultad Regional San Francisco (LOI)">                          UTN Facultad Regional San Francisco (LOI)                                       </option>'+
    '<option value="UTN Facultad Regional San Nicolas">                                  UTN Facultad Regional San Nicolás                                               </option>'+
    '<option value="UTN Facultad Regional San Rafael">                                   UTN Facultad Regional San Rafael                                                </option>'+
    '<option value="UTN Facultad Regional Santa Fe">                                     UTN Facultad Regional Santa Fe                                                  </option>'+
    '<option value="UTN Unidad Academica Chubut (LOI)">                                  UTN Unidad Académica Chubut (LOI)                                               </option>'+
    '<option value="UTN Unidad Academica Rio Gallegos">                                  UTN Unidad Académica Río Gallegos                                               </option>'+
    '<option value="UTN Unidad Academica Trenque Lauquen">                               UTN Unidad Académica Trenque Lauquen                                            </option>'+
    '<option value="Otra">                                                               Otra                                                                            </option>');
}

function fillAreaType(target)
{
  $(target).html(''+
    '<option value="0">                                         Indistinto                                          </option>'+
    '<option value="Administracion y contabilidad">             Administración y Contabilidad                       </option>'+
    '<option value="Almacenamiento/logistica/distribucion">     Almacenamiento / Logística / Distribución           </option>'+
    '<option value="Arquitectura">                              Arquitectura                                        </option>'+
    '<option value="Comercial/Ventas">                          Comercial / Ventas                                  </option>'+
    '<option value="Comercio Exterior">                         Comercio Exterior                                   </option>'+
    '<option value="Compras y Abastecimiento">                  Compras y Abastecimiento                            </option>'+
    '<option value="Diseño">                                    Diseño                                              </option>'+
    '<option value="Educacion y  Psicopedagogia">               Educación y  Psicopedagogía                         </option>'+
    '<option value="Estetica y Cuidado Personal">               Estética y Cuidado Personal                         </option>'+
    '<option value="Finanzas y Economia">                       Finanzas y Economía                                 </option>'+
    '<option value="Gastronomia">                               Gastronomía                                         </option>'+
    '<option value="Gerencia General / Alta Direccion">         Gerencia General / Alta Dirección                   </option>'+
    '<option value="Independientes">                            Independientes                                      </option>'+
    '<option value="Ingenieria / Tecnicatura">                  Ingeniería / Tecnicatura                            </option>'+
    '<option value="Jovenes Profesionales / Pasantias">         Jóvenes Profesionales / Pasantías                   </option>'+
    '<option value="Legales">                                   Legales                                             </option>'+
    '<option value="Marketing y Publicidad">                    Marketing y Publicidad                              </option>'+
    '<option value="Medios y Comunicacion">                     Medios y Comunicación                               </option>'+
    '<option value="Produccion">                                Producción                                          </option>'+
    '<option value="Puestos Operativos / Otros">                Puestos Operativos / Otros                          </option>'+
    '<option value="Quimica / Bioquimica">                      Química / Bioquímica                                </option>'+
    '<option value="Recepcion/Secretaria/Atencion al cliente">  Recepción / Secretaria / Atención al cliente        </option>'+
    '<option value="Recursos Humanos">                          Recursos Humanos                                    </option>'+
    '<option value="Relaciones Institucionales/Publicas">       Relaciones Institucionales / Públicas               </option>'+
    '<option value="Salud">                                     Salud                                               </option>'+
    '<option value="Sistemas/Tecnologia/IT">                    Sistemas / Tecnología / IT                          </option>'+
    '<option value="otra">                                      Otra                                                </option>');
}
