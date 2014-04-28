/****************************************************************************************** 
 * RELLENAR CONTENIDOS 
 ******************************************************************************************/

function fillMonths(target)
{
  $(target).html(''+
    '<option value="1" selected="">  Enero       </option>'+
    '<option value="2">              Febrero     </option>'+
    '<option value="3">              Marzo       </option>'+
    '<option value="4">              Abril       </option>'+
    '<option value="5">              Mayo        </option>'+
    '<option value="6">              Junio       </option>'+
    '<option value="7">              Julio       </option>'+
    '<option value="8">              Agosto      </option>'+
    '<option value="9">              Septiembre  </option>'+
    '<option value="10">             Octubre     </option>'+
    '<option value="11">             Noviembre   </option>'+
    '<option value="12">             Diciembre   </option>');
}


function fillYears(target, x, y)
{
  var aux;
  //2013-1934
  for(var i=x; i>y; i--)
      aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).append(''+aux);
}

function fillCountries(target)
{
  $(target).html(''+
    '<option value="0" selected>Seleccione pais</option>'+
    '<option value="Argentina"   id="cbf1364">Argentina  </option>'+
    '<option value="Brasil"      id="cbf1365">Brasil     </option>'+
    '<option value="Bolivia"     id="cbf1366">Bolivia    </option>'+
    '<option value="Chile"       id="cbf1367">Chile      </option>'+
    '<option value="Colombia"    id="cbf1368">Colombia   </option>'+
    '<option value="Cuba"        id="cbf1369">Cuba       </option>'+
    '<option value="Costa Rica"  id="cbf1370">Costa Rica </option>'+
    '<option value="Ecuador"     id="cbf1371">Ecuador    </option>'+
    '<option value="El Salvador" id="cbf1372">El Salvador</option>'+
    '<option value="España"      id="cbf1373">España     </option>'+
    '<option value="Honduras"    id="cbf1374">Honduras   </option>'+
    '<option value="Mexico"      id="cbf1375">Mexico     </option>'+
    '<option value="Panamá"      id="cbf1376">Panamá     </option>'+
    '<option value="Paraguay"    id="cbf1377">Paraguay   </option>'+
    '<option value="Perú"        id="cbf1378">Perú       </option>'+
    '<option value="Puerto Rico" id="cbf1379">Puerto Rico</option>'+
    '<option value="Uruguay"     id="cbf1380">Uruguay    </option>'+
    '<option value="Venezuela"   id="cbf1381">Venezuela  </option>');

  $('#lugar_de_residencia_provincia').html(''+
    '<option value="0" selected>Seleccione su provincia      </option>'+
    '<option value="No Aplica">          N/A                 </option>');

  $('#institucion').html(''+
    '<option value="0" selected>              Seleccione Universidad  </option>'+
    '<option value="No Aplica" id="cfg2048">  N/A                     </option>');
}

function checkCountry()
{
  if($('#lugar_de_residencia_pais').val() == "Argentina")
  {
    fillStates($('#lugar_de_residencia_provincia'), 1);
    fillUniversities($('#institucion'), 1);
  }
  else
  {
    fillStates($('#lugar_de_residencia_provincia'), 0);
    fillUniversities($('#institucion'), 0);
  }
}

function fillStates(target, flag)
{
  if(flag)
  {
    $(target).html(''+
      '<option value="0" selected>Seleccione su provincia      </option>'+
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
  else
  {
      $(target).html(''+
    '<option value="0" selected>  Seleccione su provincia </option>'+
    '<option value="No Aplica">   N/A                     </option>');
  }
}

function fillRango(target)
{
  $(target).html(''+
    '<option value="0" selected="">  Seleccione su Rango     </option>'+
    '<option value="director">       Directorio              </option>'+
    '<option value="gerente">        Gerencia                </option>'+
    '<option value="supervisor">     Supervisor/Coordinador  </option>'+
    '<option value="junior">         Junior                  </option>'+
    '<option value="pasante">        Pasante                 </option>'+
    '<option value="efectivo">       Efectivo                </option>'+
    '<option value="independiente">  Independiente           </option>'+
    '<option value="otro">           Otro                    </option>');
}

function fillUniversities(target, flag)
{
  if(flag)
  {
    $(target).html(''+
    '<option value="0"> Seleccione Universidad </option>'+
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
    else
    {
      $(target).html(''+
        '<option value="0" selected>  Seleccione Universidad  </option>'+
        '<option value="Otra">        Otra                    </option>');
    }
}

function fillDegrees(target)
{
  $(target).html(''+
   '<option value="0">                              Seleccioná uno                          </option>'+   
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

function fillCivilStatus(target)
{
  $(target).html(''+
    '<option value="0" selected>           </option>'+
    '<option value="Casado">     Casado    </option>'+
    '<option value="Soltero">    Soltero   </option>'+
    '<option value="Divorciado"> Divorciado</option>'+
    '<option value="Viudo">      Viudo     </option>'+
    '<option value="Otro">       Otro      </option>');
};

function fillCompanyType(target)
{
  $(target).html(''+
   '<option value="0">                                         Seleccioná uno                              </option>'+
    '<option value="Aeronavegacion">                            Aeronavegación                              </option>'+
    '<option value="AFJP">                                      AFJP                                        </option>'+
    '<option value="Agricultura y Ganaderia">                   Agricultura y Ganadería                     </option>'+
    '<option value="Agroindustria">                             Agroindustria                               </option>'+
    '<option value="Alimentos y Bebidas">                       Alimentos y Bebidas                         </option>'+
    '<option value="Arquitectura">                              Arquitectura                                </option>'+
    '<option value="ART">                                       ART                                         </option>'+
    '<option value="Artesanal">                                 Artesanal                                   </option>'+
    '<option value="Artistica">                                 Artística                                   </option>'+
    '<option value="Asociación Sin Fines de Lucro">             Asociación Sin Fines de Lucro               </option>'+
    '<option value="Astillero">                                 Astillero                                   </option>'+
    '<option value="Automotriz">                                Automotriz                                  </option>'+
    '<option value="Banca / Financiera">                        Banca / Financiera                          </option>'+
    '<option value="Bienes de Capital">                         Bienes de Capital                           </option>'+
    '<option value="Biotecnologia">                             Biotecnología                               </option>'+
    '<option value="Cerealera">                                 Cerealera                                   </option>'+
    '<option value="Comercio">                                  Comercio                                    </option>'+
    '<option value="Comercio Exterior">                         Comercio Exterior                           </option>'+
    '<option value="Congresos">                                 Congresos                                   </option>'+
    '<option value="Construccion">                              Construcción                                </option>'+
    '<option value="Consultoria / Auditoria">                   Consultoría / Auditoría                     </option>'+
    '<option value="Consumo Masivo">                            Consumo Masivo                              </option>'+
    '<option value="Contabilidad">                              Contabilidad                                </option>'+
    '<option value="Correo">                                    Correo                                      </option>'+
    '<option value="Cosmetica">                                 Cosmética                                   </option>'+
    '<option value="Curtiembre">                                Curtiembre                                  </option>'+
    '<option value="Defensa">                                   Defensa                                     </option>'+
    '<option value="Deportes">                                  Deportes                                    </option>'+
    '<option value="Discografia">                               Discografía                                 </option>'+
    '<option value="Diseño">                                    Diseño                                      </option>'+
    '<option value="Ecologia">                                  Ecología                                    </option>'+
    '<option value="Editorial">                                 Editorial                                   </option>'+
    '<option value="Educacion">                                 Educación                                   </option>'+
    '<option value="Electrodomesticos">                         Electrodomésticos                           </option>'+
    '<option value="156">                                       Electrónica                                 </option>'+
    '<option value="Electronica">                               Energía                                     </option>'+
    '<option value="Ente regulador">                            Ente regulador                              </option>'+
    '<option value="Entretenimiento">                           Entretenimiento                             </option>'+
    '<option value="Escribania">                                Escribanía                                  </option>'+
    '<option value="Farmaceutica">                              Farmacéutica                                </option>'+
    '<option value="Fondo de Inversion">                        Fondo de Inversión                          </option>'+
    '<option value="Forestal">                                  Forestal                                    </option>'+
    '<option value="Frigorifico">                               Frigorífico                                 </option>'+
    '<option value="Gastronomia">                               Gastronomía                                 </option>'+
    '<option value="Gobierno">                                  Gobierno                                    </option>'+
    '<option value="Grafica">                                   Gráfica                                     </option>'+
    '<option value="Higiene y Perfumeria">                      Higiene y Perfumería                        </option>'+
    '<option value="Holding">                                   Holding                                     </option>'+
    '<option value="Hoteleria">                                 Hotelería                                   </option>'+
    '<option value="Imprenta">                                  Imprenta                                    </option>'+
    '<option value="Industria">                                 Industria                                   </option>'+
    '<option value="Informacion e Investigacion">               Información e Investigación                 </option>'+
    '<option value="Inmobiliaria">                              Inmobiliaria                                </option>'+
    '<option value="Internet">                                  Internet                                    </option>'+
    '<option value="Juridica">                                  Jurídica                                    </option>'+
    '<option value="Laboratorio">                               Laboratorio                                 </option>'+
    '<option value="Maderera">                                  Maderera                                    </option>'+
    '<option value="Manufactura">                               Manufactura                                 </option>'+
    '<option value="Medicina Prepaga">                          Medicina Prepaga                            </option>'+
    '<option value="Medios">                                    Medios                                      </option>'+
    '<option value="Metalmecanica">                             Metalmecánica                               </option>'+
    '<option value="Metalurgica">                               Metalúrgica                                 </option>'+
    '<option value="Mineria / Petroleo / Gas">                  Minería / Petróleo / Gas                    </option>'+
    '<option value="Muebleria">                                 Mueblería                                   </option>'+
    '<option value="Naviera">                                   Naviera                                     </option>'+
    '<option value="Neumatico / Caucho">                        Neumático / Caucho                          </option>'+
    '<option value="Organizacion Internacional">                Organización Internacional                  </option>'+
    '<option value="Organizaciones No Gubernamentales">         Organizaciones No Gubernamentales           </option>'+
    '<option value="Papelera">                                  Papelera                                    </option>'+
    '<option value="Pesca">                                     Pesca                                       </option>'+
    '<option value="Petroquimica">                              Petroquímica                                </option>'+
    '<option value="Pinturas">                                  Pinturas                                    </option>'+
    '<option value="Plasticos">                                 Plásticos                                   </option>'+
    '<option value="Poder Judicial">                            Poder Judicial                              </option>'+
    '<option value="Productos para la construcción">            Productos para la construcción              </option>'+
    '<option value="Publicidad / Marketing / RRPP">             Publicidad / Marketing / RRPP               </option>'+
    '<option value="Quimica">                                   Química                                     </option>'+
    '<option value="Retail">                                    Retail                                      </option>'+
    '<option value="Salud">                                     Salud                                       </option>'+
    '<option value="Seguridad">                                 Seguridad                                   </option>'+
    '<option value="Seguros">                                   Seguros                                     </option>'+
    '<option value="Servicios">                                 Servicios                                   </option>'+
    '<option value="Servicios Petroleros">                      Servicios Petroleros                        </option>'+
    '<option value="Servicios Publicos">                        Servicios Públicos                          </option>'+
    '<option value="Siderurgia">                                Siderurgia                                  </option>'+
    '<option value="Supermercado / Hipermercado">               Supermercado / Hipermercado                 </option>'+
    '<option value="Tabacalera">                                Tabacalera                                  </option>'+
    '<option value="Tecnologia">                                Tecnología                                  </option>'+
    '<option value="Telecomunicaciones">                        Telecomunicaciones                          </option>'+
    '<option value="Textil">                                    Textil                                      </option>'+
    '<option value="Transportadora">                            Transportadora                              </option>'+
    '<option value="Transporte / Logistica / Distribucion">     Transporte / Logística / Distribución       </option>'+
    '<option value="Turismo">                                   Turismo                                     </option>'+
    '<option value="otra">                                      Otra                                        </option>');
};

function fillAreaType(target)
{
  $(target).html(''+
    '<option value="0">Seleccioná uno</option>'+
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

function fillBirthDate()
{
  $('#fecha_nacimiento_mes').append($('<option />').val(0).html("Mes"));
  for (i = 1; i < 13; i++)
  {
    if(i<10){
      $('#fecha_nacimiento_mes').append($('<option />').val("0"+i).html(i));
    }else{
      $('#fecha_nacimiento_mes').append($('<option />').val(i).html(i));
    }
    
  }
  updateNumberOfDays(); 

  $('#fecha_nacimiento_anio, #fecha_nacimiento_mes').change(function(){
    updateNumberOfDays(); 
  });
}

function updateNumberOfDays()
{
  $('#fecha_nacimiento_dia').html('');
  month = $('#fecha_nacimiento_mes').val();
  year  = $('#fecha_nacimiento_anio').val();
  days  = daysInMonth(month, year);

  $('#fecha_nacimiento_dia').append($('<option />').val(0).html("Día"));

  for(i=1; i < days+1 ; i++){
    if(i<10){
      $('#fecha_nacimiento_dia').append($('<option />').val("0"+i).html(i));
    }else{
      $('#fecha_nacimiento_dia').append($('<option />').val(i).html(i));
    }
    
  }
}

function daysInMonth(month, year)
{
    return new Date(year, month, 0).getDate();
}
/****************************************************************************************** 
 * CONTROLAR CAMPOS 
 ******************************************************************************************/
var previous        = "";
var previous2       = "";
var previousTarget  = "";

function checkNumeric(target)
{
  if(target.value.length > 0 && isNaN(target.value))
  {
    alert("Este campo no admite letras, sólo números");
    if(previousTarget != target)
      previous = "";
    target.value = previous;
  }
  else
  {
    previous = target.value;
    previousTarget = target;
  }
}

function checkBounds(target, val)
{
  if(target.value > val)
  {
    alert("Este campo no admite valores mayores a " + val);
    target.value = previous2;
  }
  else
    previous2 = target.value;
}

function checkAnotherUniversity()
{
  if($('#institucion').val() == "Otra")
  {
    $('#otra_universidad').css("display","inline");
  }
  else
  {
    $('#otra_universidad').css("display","none");
  }
}

function checkCareerLevel()
{
  if($('#estado_carrera').val() == "Completo"){
    $('#areaPosgrados').css("display","inline");
  }
  else{
    $('#areaPosgrados').css("display","none");
    document.getElementById('postgrado_tipo').value = "0";
    document.getElementById('postgrado_estado').value = "0";
    document.getElementById('postgrado_titulo').value = "";
    document.getElementById('postgrado_institucion').value = "";
  }
}

function stillWorkHere(target, target2, target3)
{
  if($(target).prop( "checked" ))
  { 
    $(target2).prop('disabled', true);
    $(target3).prop('disabled', true);
  }
  else
  {
    $(target2).prop('disabled', false);
    $(target3).prop('disabled', false);
  }
}

$(document).ready(function(){
    $('#contraseña').keypress(function(e){
      if(e.keyCode==13)
      $('#verify_button').click();
    });
    
});

var newUser;

function checkUser(){
   if(document.getElementById("numero_de_documento").value.match(/^\s*$/)){
      alert("Ingrese su numero de documento");
      return;
   }
   if(document.getElementById("contraseña").value.match(/^\s*$/)){
      alert("Ingrese su contraseña");
      return;
   }
   $.ajax({ url: '../../logic/inscripcion/getUserInformation.php',
            data: {dni:                    document.getElementById("numero_de_documento").value,
                   password:               document.getElementById("contraseña").value,
                 },
            type: 'POST',
            success: function(output){
              if(output == "Combinación de DNI y contraseña invalida"){
                alert(output);
              }
              else{
                var obj = JSON.parse(output);
                document.getElementById("numero_de_documento").value              = obj.dni;
                document.getElementById("numero_de_documento").disabled = true;
                document.getElementById("nombre").value                           = obj.name;
                document.getElementById("apellido").value                         = obj.lastname; 
                document.getElementById("sexo").value                             = obj. sex;
                document.getElementById("email").value                            = obj.email; 
                document.getElementById("div_confirme_email").style.display       = 'none';
                document.getElementById("div_password").style.display       = 'none';
                document.getElementById("telefono_codigo_area").value             = obj.celPhone.split("-")[0];
                document.getElementById("telefono_celular").value                 = obj.celPhone.split("-")[1];
                document.getElementById("fecha_nacimiento_anio").value            = obj.bornDate.split("-")[0];
                document.getElementById("fecha_nacimiento_mes").value             = obj.bornDate.split("-")[1];
                document.getElementById("fecha_nacimiento_dia").value             = obj.bornDate.split("-")[2];
                document.getElementById("lugar_de_residencia_pais").value         = obj.country;
                document.getElementById("lugar_de_residencia_pais").onchange();
                document.getElementById("lugar_de_residencia_provincia").value    = obj.state;
                document.getElementById("lugar_de_residencia_ciudad").value       = obj.city;
                document.getElementById("estado_civil").value                     = obj.civilStatus;

                if(0 != $('#institucion option[value='+"'"+obj.university+"'"+']').length ){
                    document.getElementById("institucion").value                  = obj.university;
                }else{
                    document.getElementById("universidad").value                  = obj.university;
                }
                if(0 != $('#carrera_area option[value='+"'"+obj.careerArea+"'"+']').length ){
                    document.getElementById("carrera_area").value                 = obj.careerArea;
                }else{
                    document.getElementById("otraCarrera").value                  = obj.carreerArea;
                }
                document.getElementById("carrera_area").value                     = obj.careerArea;
                document.getElementById("carrera_titulo").value                   = obj.title; 
                document.getElementById("estado_carrera").value                   = obj.careerStatus;
                document.getElementById("estado_carrera").onchange();
                document.getElementById("carrera_materiasAprobadas").value        = obj.subjectsApproved;
                document.getElementById("carrera_promedio").value                 = obj.careerAverage;
                document.getElementById("carrera_totalMaterias").value            = obj.totalSubjects;
                document.getElementById("postgrado_tipo").value                   = obj.postgraduate_type;
                document.getElementById("postgrado_estado").value                 = obj.postgraduate_status;
                document.getElementById("postgrado_titulo").value                 = obj.postgraduate_title;
                document.getElementById("postgrado_institucion").value            = obj.postgraduate_institution;
                var $radiosEspañol                                                = $('input:radio[name=nivel_español]');
                $radiosEspañol.filter('[value=' + obj.español_level +']').attr('checked', true);
                var $radiosIngles                                                 = $('input:radio[name=nivel_ingles]');
                $radiosIngles.filter('[value=' + obj.ingles_level +']').attr('checked', true);
                var $radiosPortugues                                              = $('input:radio[name=nivel_portugues]');
                $radiosPortugues.filter('[value=' + obj.portugues_level +']').attr('checked', true);
                var $radiosAleman                                                 = $('input:radio[name=nivel_aleman]');
                $radiosAleman.filter('[value=' + obj.aleman_level +']').attr('checked', true);
                var $radiosItaliano                                               = $('input:radio[name=nivel_italiano]');
                $radiosItaliano.filter('[value=' + obj.italiano_level +']').attr('checked', true);
                var $radiosFrances                                                = $('input:radio[name=nivel_frances]');
                $radiosFrances.filter('[value=' + obj.frances_level +']').attr('checked', true);

                document.getElementById("trabaja").value                          = obj.works;
                if(obj.company_name_1 != undefined){     
                  document.getElementById("empresa_1_nombre").value                 = obj.company_name_1;
                }
                if(obj.company_type_1 != undefined){
                  document.getElementById("empresa_1_tipo").value                   = obj.company_type_1;
                }
                if(obj.job_description_1 != undefined){
                  document.getElementById("trabajo_1_descripcion").value            = obj.job_description_1;
                }
                if(obj.job_area_1 != undefined){
                  document.getElementById("trabajo_1_area").value                   = obj.job_area_1;
                }
                if(obj.job_range_1 != undefined){
                  document.getElementById("trabajo_1_senior").value                 = obj.job_range_1;
                }
                if(obj.job_from_1 != undefined){
                  document.getElementById("trabajo_1_mes_desde").value              = obj.job_from_1.split("-")[0];
                  document.getElementById("trabajo_1_año_desde").value              = obj.job_from_1.split("-")[1];
                }
                if(obj.job_to_1 != undefined){
                  document.getElementById("trabajo_1_mes_hasta").value              = obj.job_to_1.split("-")[0];
                  document.getElementById("trabajo_1_año_hasta").value              = obj.job_to_1.split("-")[1];
                }
                if(obj.company_name_2 != undefined){
                  document.getElementById("empresa_2_nombre").value                 = obj.company_name_2;
                }
                if(obj.company_type_2 != undefined){
                  document.getElementById("empresa_2_tipo").value                   = obj.company_type_2;  
                }
                if(obj.job_description_2 != undefined){
                  document.getElementById("trabajo_2_descripcion").value            = obj.job_description_2;
                }
                if(obj.job_area_2 != undefined){
                  document.getElementById("trabajo_2_area").value                   = obj.job_area_2;
                }
                if(obj.job_range_2 != undefined){
                  document.getElementById("trabajo_2_senior").value                 = obj.job_range_2;
                }
                if(obj.job_from_2 != undefined){
                  document.getElementById("trabajo_2_mes_desde").value              = obj.job_from_2.split("-")[0];
                  document.getElementById("trabajo_2_año_desde").value              = obj.job_from_2.split("-")[1];  
                }
                if(obj.job_to_2 != undefined){
                  document.getElementById("trabajo_2_mes_hasta").value              = obj.job_to_2.split("-")[0];
                  document.getElementById("trabajo_2_año_hasta").value              = obj.job_to_2.split("-")[1];
                }
                if(obj.company_name_3 != undefined){
                  document.getElementById("empresa_3_nombre").value                 = obj.company_name_3;
                }
                if(obj.company_type_3 != undefined){
                  document.getElementById("empresa_3_tipo").value                   = obj.company_type_3;
                }
                if(obj.job_description_3 != undefined){
                  document.getElementById("trabajo_3_descripcion").value            = obj.job_description_3;
                }
                if(obj.job_area_3 != undefined){
                  document.getElementById("trabajo_3_area").value                   = obj.job_area_3;
                }
                if(obj.job_range_3 != undefined){
                  document.getElementById("trabajo_3_senior").value                 = obj.job_range_3;
                }
                if(obj.job_from_3 != undefined){
                  document.getElementById("trabajo_3_mes_desde").value              = obj.job_from_3.split("-")[0];
                  document.getElementById("trabajo_3_año_desde").value              = obj.job_from_3.split("-")[1];
                }
                if(obj.job_to_3 != undefined){
                  document.getElementById("trabajo_3_mes_hasta").value              = obj.job_to_3.split("-")[0];
                  document.getElementById("trabajo_3_año_hasta").value              = obj.job_to_3.split("-")[1];
                }

                
                getCurriculumFile(obj.curriculumId);
                
                document.getElementById("olvido_contraseña").style.display='none';
                document.getElementById("personalInformation").style.display='inline';
                document.getElementById("password_div").style.display='none';
                document.getElementById("buttons").style.display='none';
                newUser = false;
              }
            }
    });

}

function getCurriculumFile(curriculumId){
    var id;
    if(curriculumId != null){
      id = curriculumId;
    }else{
      id = -1;
    }
    

    $.ajax({ url: '../../logic/inscripcion/list_files.php',
              data: {id:                    id,
                   },
              type: 'GET',
              success: function(output) {
                 if(output == "<p>No cargaste tu curriculum</p>"){
                    $("#LoadedCurriculum").append("<p>No tienes un curriculum cargado</p><br>");
                    $("#LoadedCurriculum").append("<span style='text-align: center'><input type='submit' name='submit' value='Subir CV' class='button' onclick='uploadNewCurriculum()'></span>");
                    
                 }
                 else{
                    $("#LoadedCurriculum").append(output);
                    $("#LoadedCurriculum").append("<span style='text-align: center'><input type='submit' name='submit' value='Subir nuevo CV' class='button' onclick='uploadCurriculum()'></span>");
                    
                 }
                 
              }

          });

}

function uploadNewCurriculum(){
  document.getElementById("new_curriculum_div").style.display = 'inline-table';
}

function uploadCurriculum(){
  document.getElementById("upload_curriculum_div").style.display = 'inline-table';
}

function createNewUser(){
    document.getElementById("personalInformation").style.display='inline';
    document.getElementById("password_div").style.display='none';
    document.getElementById("buttons").style.display='none';
    document.getElementById("olvido_contraseña").style.display='none';
    newUser = true;
}

function sendPersonalInformation(){
    if(newUser){
            if(document.getElementById("confirme_nueva_contraseña").value == document.getElementById("contraseña_nueva").value){
              if(document.getElementById("confirme_email").value == document.getElementById("email").value){
                if(document.getElementById("numero_de_documento").value.match(/^\s*$/) || document.getElementById("numero_de_documento").value.length<6 ||document.getElementById("numero_de_documento").value.length>9){
                  alert("Ingrese su numero de documento");
                  return;
                }
                if(document.getElementById("nombre").value.match(/^\s*$/)){
                  alert("Ingrese su nombre");
                  return;
                }
                if(document.getElementById("apellido").value.match(/^\s*$/)){
                  alert("Ingrese su apellido");
                  return;
                }
                if(document.getElementById("email").value.match(/^\s*$/)){
                  alert("Ingrese su direccion de email");
                  return;
                }
                if(document.getElementById("contraseña_nueva").value.match(/^\s*$/)){
                  alert("Ingrese su contraseña");
                  return;
                }
                if(document.getElementById("telefono_celular").value.match(/^\s*$/)){
                  alert("Ingrese su telefono de contacto");
                  return;
                }
                if(document.getElementById("fecha_nacimiento_dia").value == "0" || document.getElementById("fecha_nacimiento_mes").value == "0" || document.getElementById("fecha_nacimiento_anio").value == "0"){
                  alert("Ingrese una fecha de nacimiento correcta");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_pais").value == "0"){
                  alert("Ingrese su pais de residencia");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_provincia").value == "0"){
                  alert("Ingrese su provincia de residencia");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_ciudad").value.match(/^\s*$/)){
                  alert("Ingrese su ciudad de residencia");
                  return;
                }
                
                $.ajax({ url: '../../logic/inscripcion/savePersonalInformation.php',
                     data: {user:                   "newUser",
                            dni:                    document.getElementById("numero_de_documento").value,
                            name:                   document.getElementById("nombre").value,
                            lastname:               document.getElementById("apellido").value, 
                            sex:                    document.getElementById("sexo").value,
                            email:                  document.getElementById("confirme_email").value, 
                            password:               document.getElementById("confirme_nueva_contraseña").value,
                            celPhone:               document.getElementById("telefono_codigo_area").value +"-"+document.getElementById("telefono_celular").value,
                            dayOfBorn:              document.getElementById("fecha_nacimiento_dia").value,
                            monthOfBorn:            document.getElementById("fecha_nacimiento_mes").value,
                            yearOfBorn:             document.getElementById("fecha_nacimiento_anio").value,
                            countryOfResidence:     document.getElementById("lugar_de_residencia_pais").value,
                            stateOfResidence:       document.getElementById("lugar_de_residencia_provincia").value,
                            cityOfResidence:        document.getElementById("lugar_de_residencia_ciudad").value,
                            civil_status:           document.getElementById("estado_civil").value,
                            },
                     type: 'POST',
                     success: function(output) {
                            if(output == "Ya existe un usuario registrado con el numero de documento" || output == "Ya existe un usuario registrado con la direccion de email"){
                              alert(output);
                              return;
                            }else{
                              document.getElementById("personalInformation").style.display = 'none';
                              document.getElementById("numero_de_documento").style.display = 'none';
                              document.getElementById("academicInformation").style.display = 'inline';
                              document.getElementById("ID_div").style.display='none';
                              document.getElementById("dni").value = document.getElementById("numero_de_documento").value;
                              document.getElementById("dniupload").value = document.getElementById("numero_de_documento").value;

                            }    
                     }
                   });
              }else{
                alert("Las direcciones de e-mail no coinciden");
              }
              
            }else{
                alert("Las contraseñas no coinciden");
            }
            
    }else{
      if(document.getElementById("numero_de_documento").value.match(/^\s*$/)){
                  alert("Ingrese su numero de documento");
                  return;
                }
                if(document.getElementById("nombre").value.match(/^\s*$/)){
                  alert("Ingrese su nombre");
                  return;
                }
                if(document.getElementById("apellido").value.match(/^\s*$/)){
                  alert("Ingrese su apellido");
                  return;
                }
                if(document.getElementById("email").value.match(/^\s*$/)){
                  alert("Ingrese su direccion de email");
                  return;
                }
                if(document.getElementById("telefono_celular").value.match(/^\s*$/)){
                  alert("Ingrese su telefono de contacto");
                  return;
                }
                if(document.getElementById("fecha_nacimiento_dia").value == "0" || document.getElementById("fecha_nacimiento_mes").value == "0" || document.getElementById("fecha_nacimiento_anio").value == "0"){
                  alert("Ingrese una fecha de nacimiento correcta");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_pais").value == "0"){
                  alert("Ingrese su pais de residencia");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_provincia").value == "0"){
                  alert("Ingrese su provincia de residencia");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_ciudad").value.match(/^\s*$/)){
                  alert("Ingrese su ciudad de residencia");
                  return;
                }
                
                $.ajax({ url: '../../logic/inscripcion/savePersonalInformation.php',
                     data: {user:                   "oldUser",
                            dni:                    document.getElementById("numero_de_documento").value,
                            name:                   document.getElementById("nombre").value,
                            lastname:               document.getElementById("apellido").value, 
                            sex:                    document.getElementById("sexo").value,
                            email:                  document.getElementById("email").value, 
                            celPhone:               document.getElementById("telefono_codigo_area").value +"-"+document.getElementById("telefono_celular").value,
                            dayOfBorn:              document.getElementById("fecha_nacimiento_dia").value,
                            monthOfBorn:            document.getElementById("fecha_nacimiento_mes").value,
                            yearOfBorn:             document.getElementById("fecha_nacimiento_anio").value,
                            countryOfResidence:     document.getElementById("lugar_de_residencia_pais").value,
                            stateOfResidence:       document.getElementById("lugar_de_residencia_provincia").value,
                            cityOfResidence:        document.getElementById("lugar_de_residencia_ciudad").value,
                            civil_status:           document.getElementById("estado_civil").value,
                            },
                     type: 'POST',
                     success: function(output) {
                            if(output == "Ya existe un usuario registrado con el numero de documento" || output == "Ya existe un usuario registrado con la direccion de email"){
                              alert(output);
                              return;
                            }else{
                              document.getElementById("personalInformation").style.display = 'none';
                              document.getElementById("numero_de_documento").style.display = 'none';
                              document.getElementById("academicInformation").style.display = 'inline';
                              document.getElementById("ID_div").style.display='none';
                              document.getElementById("dni").value = document.getElementById("numero_de_documento").value;
                              document.getElementById("dniupload").value = document.getElementById("numero_de_documento").value;
                            }    
                     }
                   });
    }
}

function sendAcademicInformation(){
  if(newUser){
    var institucion;
    if(!document.getElementById("universidad").value.match(/^\s*$/)){
        institucion = document.getElementById("universidad").value;
    }else{
        if(document.getElementById("institucion").value == "0"){
          alert("Ingrese la institucion donde estudia");
          return;
        }
        institucion = document.getElementById("institucion").value;
    }
    var carrera;
    if(!document.getElementById("otraCarrera").value.match(/^\s*$/)){
        carrera = document.getElementById("otraCarrera").value;
    }else{
        if(document.getElementById("carrera_area").value == "0"){
          alert("Ingrese su area de estudio");
          return;
        }
        carrera = document.getElementById("carrera_area").value;
    }
    if(document.getElementById("carrera_titulo").value.match(/^\s*$/)){
        alert("Ingrese la carrera que estudia");
        return;
    }
    if(document.getElementById("estado_carrera").value.match(/^\s*$/)){
        alert("Ingrese el estado de su carrera");
        return;
    }

    if( $('input[name="nivel_ingles"]:checked').val() == undefined || $('input[name="nivel_español"]:checked').val() == undefined|| 
        $('input[name="nivel_portugues"]:checked').val() == undefined || $('input[name="nivel_aleman"]:checked').val() == undefined ||
        $('input[name="nivel_italiano"]:checked').val() == undefined || $('input[name="nivel_frances"]:checked').val() == undefined){
        alert("Seleccione su nivel en todos los idiomas");
        return;
    }  
    $.ajax({url: '../../logic/inscripcion/saveAcademicInformation.php',
            data:  {user:                        "newUser",
                    dni:                         document.getElementById("numero_de_documento").value,
                    university:                  institucion,
                    career_area:                 carrera,
                    career_title:                document.getElementById("carrera_titulo").value, 
                    career_status:               document.getElementById("estado_carrera").value,
                    approved_subjects:           document.getElementById("carrera_materiasAprobadas").value,
                    career_average:              document.getElementById("carrera_promedio").value,
                    career_totalSubjects:        document.getElementById("carrera_totalMaterias").value,
                    postgraduate_type:           document.getElementById("postgrado_tipo").value,
                    postgraduate_status:         document.getElementById("postgrado_estado").value,
                    postgraduate_title:          document.getElementById("postgrado_titulo").value,
                    postgraduate_institution:    document.getElementById("postgrado_institucion").value,
                    englishLevel:                $('input[name="nivel_ingles"]:checked').val(),
                    spanishLevel:                $('input[name="nivel_español"]:checked').val(),
                    portugueseLevel:             $('input[name="nivel_portugues"]:checked').val(),
                    germanLevel:                 $('input[name="nivel_aleman"]:checked').val(),
                    italianLevel:                $('input[name="nivel_italiano"]:checked').val(),
                    frenchLevel:                 $('input[name="nivel_frances"]:checked').val(),
                   },
            type: 'POST',
            success: function(output) {
                    document.getElementById("academicInformation").style.display = 'none';
                    document.getElementById("jobInformation").style.display = 'inline';
            }
    });
  }else{
    var institucion;
    if(!document.getElementById("universidad").value.match(/^\s*$/)){
        institucion = document.getElementById("universidad").value;
    }else{
        if(document.getElementById("institucion").value == "0"){
          alert("Ingrese la institucion donde estudia");
          return;
        }
        institucion = document.getElementById("institucion").value;
    }
    var carrera;
    if(!document.getElementById("otraCarrera").value.match(/^\s*$/)){
        carrera = document.getElementById("otraCarrera").value;
    }else{
        if(document.getElementById("carrera_area").value == "0"){
          alert("Ingrese su area de estudio");
          return;
        }
        carrera = document.getElementById("carrera_area").value;
    }
    if(document.getElementById("carrera_titulo").value.match(/^\s*$/)){
        alert("Ingrese la carrera que estudia");
        return;
    }
    if(document.getElementById("estado_carrera").value.match(/^\s*$/)){
        alert("Ingrese el estado de su carrera");
        return;
    }

    if( $('input[name="nivel_ingles"]:checked').val() == undefined || $('input[name="nivel_español"]:checked').val() == undefined|| 
        $('input[name="nivel_portugues"]:checked').val() == undefined || $('input[name="nivel_aleman"]:checked').val() == undefined ||
        $('input[name="nivel_italiano"]:checked').val() == undefined || $('input[name="nivel_frances"]:checked').val() == undefined){
        alert("Seleccione su nivel en todos los idiomas");
        return;
    }  
    $.ajax({url: '../../logic/inscripcion/saveAcademicInformation.php',
            data:  {user:                        "oldUser",
                    dni:                         document.getElementById("numero_de_documento").value,
                    university:                  institucion,
                    career_area:                 carrera,
                    career_title:                document.getElementById("carrera_titulo").value, 
                    career_status:               document.getElementById("estado_carrera").value,
                    approved_subjects:           document.getElementById("carrera_materiasAprobadas").value,
                    career_average:              document.getElementById("carrera_promedio").value,
                    career_totalSubjects:        document.getElementById("carrera_totalMaterias").value,
                    postgraduate_type:           document.getElementById("postgrado_tipo").value,
                    postgraduate_status:         document.getElementById("postgrado_estado").value,
                    postgraduate_title:          document.getElementById("postgrado_titulo").value,
                    postgraduate_institution:    document.getElementById("postgrado_institucion").value,
                    englishLevel:                $('input[name="nivel_ingles"]:checked').val(),
                    spanishLevel:                $('input[name="nivel_español"]:checked').val(),
                    portugueseLevel:             $('input[name="nivel_portugues"]:checked').val(),
                    germanLevel:                 $('input[name="nivel_aleman"]:checked').val(),
                    italianLevel:                $('input[name="nivel_italiano"]:checked').val(),
                    frenchLevel:                 $('input[name="nivel_frances"]:checked').val(),
                   },
            type: 'POST',
            success: function(output) { 
                    document.getElementById("academicInformation").style.display = 'none';
                    document.getElementById("jobInformation").style.display = 'inline';
            }
    });
  }
}


function sendLaboralInformation(){
  if(newUser){
     if(document.getElementById("trabaja").value == "0"){
        alert("Ingrese si actualmente trabaja o no");
        return;
     }
    
     $.ajax({ url: '../../logic/inscripcion/saveLaboralInformation.php',
            data:  {user:                        "newUser",
                    dni:                         document.getElementById("numero_de_documento").value,
                    still_works:                 document.getElementById("trabaja").value,
                    
                    company_1_name:              document.getElementById("empresa_1_nombre").value,
                    company_1_type:              document.getElementById("empresa_1_tipo").value,
                    job_1_description:           document.getElementById("trabajo_1_descripcion").value,
                    job_1_area:                  document.getElementById("trabajo_1_area").value,
                    job_1_senior:                document.getElementById("trabajo_1_senior").value,
                    job_1_from:                  document.getElementById("trabajo_1_mes_desde").value + "-" + document.getElementById("trabajo_1_año_desde").value,
                    job_1_to:                    document.getElementById("trabajo_1_mes_hasta").value + "-" + document.getElementById("trabajo_1_año_hasta").value,

                    company_2_name:              document.getElementById("empresa_2_nombre").value,
                    company_2_type:              document.getElementById("empresa_2_tipo").value,
                    job_2_description:           document.getElementById("trabajo_2_descripcion").value,
                    job_2_area:                  document.getElementById("trabajo_2_area").value,
                    job_2_senior:                document.getElementById("trabajo_2_senior").value,
                    job_2_from:                  document.getElementById("trabajo_2_mes_desde").value + "-" + document.getElementById("trabajo_2_año_desde").value,
                    job_2_to:                    document.getElementById("trabajo_2_mes_hasta").value + "-" + document.getElementById("trabajo_2_año_hasta").value,

                    company_3_name:              document.getElementById("empresa_3_nombre").value,
                    company_3_type:              document.getElementById("empresa_3_tipo").value,
                    job_3_description:           document.getElementById("trabajo_3_descripcion").value,
                    job_3_area:                  document.getElementById("trabajo_3_area").value,
                    job_3_senior:                document.getElementById("trabajo_3_senior").value,
                    job_3_from:                  document.getElementById("trabajo_3_mes_desde").value + "-" + document.getElementById("trabajo_3_año_desde").value,
                    job_3_to:                    document.getElementById("trabajo_3_mes_hasta").value + "-" + document.getElementById("trabajo_3_año_hasta").value,

                   },
                    type: 'POST',
                    success: function(output) {
                    		alert(output);
                    		newUser = false;
                            //alert("El usuario a sido regitrado exitosamente, por favor envie su curriculum");
                            //document.getElementById("curriculum_div").style.display = 'inline-table';    
                    }
            });
  }else{
      if(document.getElementById("trabaja").value == "0"){
        alert("Ingrese si actualmente trabaja o no");
        return;
     }
    
     $.ajax({ url: '../../logic/inscripcion/saveLaboralInformation.php',
            data:  {user:                        "oldUser",
                    dni:                         document.getElementById("numero_de_documento").value,
                    still_works:                 document.getElementById("trabaja").value,
                    
                    company_1_name:              document.getElementById("empresa_1_nombre").value,
                    company_1_type:              document.getElementById("empresa_1_tipo").value,
                    job_1_description:           document.getElementById("trabajo_1_descripcion").value,
                    job_1_area:                  document.getElementById("trabajo_1_area").value,
                    job_1_senior:                document.getElementById("trabajo_1_senior").value,
                    job_1_from:                  document.getElementById("trabajo_1_mes_desde").value + "-" + document.getElementById("trabajo_1_año_desde").value,
                    job_1_to:                    document.getElementById("trabajo_1_mes_hasta").value + "-" + document.getElementById("trabajo_1_año_hasta").value,

                    company_2_name:              document.getElementById("empresa_2_nombre").value,
                    company_2_type:              document.getElementById("empresa_2_tipo").value,
                    job_2_description:           document.getElementById("trabajo_2_descripcion").value,
                    job_2_area:                  document.getElementById("trabajo_2_area").value,
                    job_2_senior:                document.getElementById("trabajo_2_senior").value,
                    job_2_from:                  document.getElementById("trabajo_2_mes_desde").value + "-" + document.getElementById("trabajo_2_año_desde").value,
                    job_2_to:                    document.getElementById("trabajo_2_mes_hasta").value + "-" + document.getElementById("trabajo_2_año_hasta").value,

                    company_3_name:              document.getElementById("empresa_3_nombre").value,
                    company_3_type:              document.getElementById("empresa_3_tipo").value,
                    job_3_description:           document.getElementById("trabajo_3_descripcion").value,
                    job_3_area:                  document.getElementById("trabajo_3_area").value,
                    job_3_senior:                document.getElementById("trabajo_3_senior").value,
                    job_3_from:                  document.getElementById("trabajo_3_mes_desde").value + "-" + document.getElementById("trabajo_3_año_desde").value,
                    job_3_to:                    document.getElementById("trabajo_3_mes_hasta").value + "-" + document.getElementById("trabajo_3_año_hasta").value,

                   },
                    type: 'POST',
                    success: function(output) {
                        alert(output);
                            //alert("El usuario a sido regitrado exitosamente, por favor envie su curriculum");
                            //document.getElementById("curriculum_div").style.display = 'inline-table';    
                    }
            });
  }
}