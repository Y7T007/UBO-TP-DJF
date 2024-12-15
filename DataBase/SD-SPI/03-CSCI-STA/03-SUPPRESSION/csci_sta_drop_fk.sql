--
-- Projet SIGOTI - CSCI_STA
-- 	Script de suppression des clés étrangères portant sur des tables externes au CSCI courant
-- 	Ph. Saliou - 10 octobre 2012 -
--

ALTER TABLE PROMOTION DROP CONSTRAINT PRO_STRE_FK;
ALTER TABLE PROMOTION DROP CONSTRAINT PRO_NOTS_FK;

