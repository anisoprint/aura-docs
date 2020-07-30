# Release notes  

## v1.26  
* **[Added]** New print time calculation module, which emulates the motion planner of the printer firmware. The new algorithm takes into account accelerations and extruder heating time on tool changes. New settings were added to the printer configuration: accelerations, extruder heating speed, and buildplate heating speed  
* **[Added]** Added preheat of inactive extruder before tool change.
Preheat can be turned on in plastic settings. Also, the preheat temperature can be specified. The preheat temperature should be between the standby temperature and print temperature. If preheat is on the next extruder will start to heat in advance, when the previous extruder is still printing. The beginning of the preheat is planned based on the heating speed of the extruder and the difference between the standby and preheating temperatures to reach the preheating temperature just before the tool change. Preheat is off by default. Turning it on allows us to reduce extruder switch time, speeding up the print  
* **[Changed]** Algorithms for filling thin areas with solid infill were reworked  
* **[Changed]** Algorithms for merging close plastic perimeters were reworked  
* **[Added]** Gaps between external shell perimeters are now filled with microinfill. Gaps between inner plastic perimeters are now filled with solid infill  
* **[Changed]** Thin areas inside the part are now filled with solid infill instead of cellular infill  
* **[Added]** Added M530 commands to start and end g-codes of Composer printers to ensure smooth printing from PC by USB  
* **[Fix]** Small fixes in UI

## v1.25  
* **[Added]** Rotation tool reworked. Now the part can be rotated to lay the selected face flat on the buildplate  
* **[Added]** The part can now be scaled to a given size  
* **[Added]** New application settings window (File->Settings)  
* **[Added]** Collision check for parts on the buildplate can now be turned off in settings  
* **[Added]** Added hotkeys for commands, that can be changed in settings  
* **[Added]** Added hotkeys for changing layers in code preview mode (Up/Down, PageUp/PageDown). Improved control of UI elements from keyboard  
* **[Added]** Added separate flow multipliers for each zone of a part to profile   This factor is multiplied by the global flow multiplier in Plastics settings  
* **[Added]** New parameters added to the settings: "Do unretract before tool change" in Printer settings and "Extra unretract on tool change" in Plastics settings. These parameters allow to prime inactive extruder before changing to it to eliminate under-extrusion after a tool change  
* **[Changed]** Path planning algorithms improved, resulting in up to 25% fewer travels  
* **[Changed]** Improved hiding of retracts and unretracts on external perimeters  
* **[Changed]** Changed layer printing sequence: cellular infill is now printed first, following with internal perimeters, external perimeters, and solid infill. This sequence improves print quality for solid infill and perimeters  
* **[Changed]** New application icon    
* **[Changed]** 3D graphics engine updated  
* **[Fixed]** File->Exit command in the main menu was disabled  
* **[Fixed]** Project was considered as "changed" immediately after loading  
* **[Fixed]** Occurring UI freezes during slicing  
* **[Fixed]** Exceptions in rare cases during the model opening process  
* **[Fixed]** Error message after slicing cancellation  
* **[Fixed]** Exception on opening STP model with curves  
* **[Fixed]** Wrong part scale values after rotation  
* **[Fixed]** Disabling layup ruler for models  
* **[Fixed]** Exceptions in rare cases during slicing  
* **[Fixed]** Typos in UI  

## v1.24.2  
* **[Fixed]** Absense of wipe tower  

## v1.24.1  
* **[Added]** Added alpha version on the command line interface. User manual: https://github.com/anisoprint/aura-docs/blob/master/cli/cli.md  
* **[Added]** Updated profiles for MCPP Carbon-P, now profiles for 0.4 mm and 0.6 mm nozzles are included  
* **[Added]** New parameter "Fill angle offset" added to the cellular infill section of the profile. It allows changing cellular infill orientation from layer to layer  
* **[Added]** Current slicing settings are now included at the end of each generated g-code file  
* **[Changed]** Z-hops are now always vertical  
* **[Changed]** Material consumption is now not displayed when it is zero  
* **[Changed]** Increased max connection distance for reinforced infills. Now more lines are connected into one and fewer cuts are added  
* **[Fixed]** Fixed exception when printing reinforced perimeters with Top and bottom solid layers count set to zero  
* **[Fixed]** No conflict on loading project with changed reinforced infill settings  
* **[Fixed]** Fixed error with deselection of models during editing part regions  
* **[Fixed]** Fixed incorrect seam point calculation for the external shell  
* **[Fixed]** Fixed problem with part contour expansion  

## v1.23.2  
* **[Notice]** Version numbering changed from 0.9.X.Y to 1.X.Y  
* **[Added]** New standard profiles, printers, and material settings  
* **[Added]** Machine serial number field added to Support form  
* **[Added]** Added output of print time and material consumptions to the end of the g-code file. This information is displayed on Composer with MKA v1.0.0+ firmware  
* **[Added]** Tool change movements are now always performed at the beginning of the print job to ensure that the correct extruder is active  
* **[Changed]** Too short reinforced perimeters are now substituted by solid plastic infill, not cellular  
* **[Changed]** Increased the number of digits after the dot in the extrusion values in g-code  
* **[Changed]** Max value of Perimeter trim ratio setting increased to 2  
* **[Fixed]** Problem with reinforced entities print speed calculations for speed coefficients less than 0.6  
* **[Fixed]** Z-hop with Do wipe nozzle turned on and Wipe distance set to zero  
* **[Fixed]** The first layer height is now displayed correctly in Set Layup view  
* **[Fixed]** Fixed exception which occurred during reinforced perimeters generation in some cases   
* **[Fixed]** Duplication of selected standard profile  

