--
-- Script de cr�ation des PRIMARY KEY du CSCI-ADM
-- Ph. Saliou - 04 octobre 2012 - 
--	
  
PROMPT Creating Primary Key on 'ETUDIANT'
ALTER TABLE ETUDIANT
 ADD (CONSTRAINT ETU_PK PRIMARY KEY 
  (NO_ETUDIANT_NAT))
/

PROMPT Creating Primary Key on 'EMPLOYE'
ALTER TABLE EMPLOYE
 ADD (CONSTRAINT EMP_PK PRIMARY KEY 
  (NO_CONTACT_ILI))
/

PROMPT Creating Primary Key on 'POSTE_ENTREPRISE'
ALTER TABLE POSTE_ENTREPRISE
 ADD (CONSTRAINT POE_PK PRIMARY KEY 
  (NO_ETUDIANT_NAT
  ,NO_ENTREPRISE))
/

PROMPT Creating Primary Key on 'ENTREPRISE'
ALTER TABLE ENTREPRISE
 ADD (CONSTRAINT ENT_PK PRIMARY KEY 
  (NO_ENTREPRISE))
/

PROMPT Creating Primary Key on 'ENSEIGNANT'
ALTER TABLE ENSEIGNANT
 ADD (CONSTRAINT ENS_PK PRIMARY KEY 
  (NO_ENSEIGNANT))
/

PROMPT Creating Primary Key on 'PROMOTION'
ALTER TABLE PROMOTION
 ADD (CONSTRAINT PRO_PK PRIMARY KEY 
  (ANNEE_PRO))
/

PROMPT Creating Primary Key on 'CANDIDAT'
ALTER TABLE CANDIDAT
 ADD (CONSTRAINT CAN_PK PRIMARY KEY 
  (NO_ETUDIANT_NAT))
/

PROMPT Creating Primary Key on 'DIPLOME'
ALTER TABLE DIPLOME
 ADD (CONSTRAINT DIP_PK PRIMARY KEY 
  (NO_ETUDIANT_NAT))
/
